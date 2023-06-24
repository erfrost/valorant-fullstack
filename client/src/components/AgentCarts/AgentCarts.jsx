import { useEffect, useState } from "react";
import "./AgentCarts.css";
import { getAgents } from "../../api/getAgents";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { agentsState } from "../../storage/atoms/main";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import { agentsTransform } from "../../utils/agentsTransform";

const AgentCarts = () => {
  const [agents, setAgents] = useRecoilState(agentsState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const get = async () => {
    try {
      setLoading(true);
      const res = await getAgents();
      const data = await res.json();
      const transformData = agentsTransform(data.data);
      setAgents(transformData);
      setLoading(false);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error get={get} />
      ) : (
        <div className="agentsPage">
          {agents.map((agent) => (
            <Link
              to={`/agents/${agent.displayName.toLowerCase()}`}
              className="agent-cart"
              key={agent.uuid}
            >
              <img
                className="portrait"
                src={agent.fullPortrait}
                alt="portrait"
                loading="lazy"
              />
              <div className="agent-info">
                <span className="name">
                  {agent.displayName} / {agent.role.displayName}
                </span>
                <span className="description">{agent.description}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default AgentCarts;
