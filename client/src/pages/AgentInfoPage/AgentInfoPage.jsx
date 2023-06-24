import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./AgentInfoPage.css";
import Header from "../../components/Header/Header";
import { getAgents } from "../../api/getAgents";
import { useRecoilState } from "recoil";
import { agentsState } from "../../storage/atoms/main";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import { Tooltip } from "@chakra-ui/react";
import RouteBack from "../../components/RouteBack/RouteBack";
import { agentsTransform } from "../../utils/agentsTransform";

const AgentInfoPage = () => {
  const [agents, setAgents] = useRecoilState(agentsState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentAgent, setCurrentAgent] = useState(null);

  const { agentName } = useParams();

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
    !agents.length ? get() : setLoading(false);
  }, []);

  useEffect(() => {
    setCurrentAgent(
      agents?.find((agent) => agent.displayName.toLowerCase() === agentName)
    );
  }, [agents, agentName]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error get={get} />
      ) : (
        <div className="container">
          <Header />
          <RouteBack path="/agents" />
          <div className="boxes-container">
            <div className="box-1">
              <img
                className="portrait"
                src={currentAgent.fullPortrait}
                alt="portrait"
              />
              <div className="agent-info">
                <span className="name info-title">
                  {currentAgent.displayName} / {currentAgent.role.displayName}
                  <Tooltip
                    className="tooltip"
                    label={currentAgent.role.description}
                  >
                    <div className="abilities" style={{ borderRadius: "10px" }}>
                      <img
                        className="role-image"
                        src={currentAgent.role.displayIcon}
                        alt="role"
                      />
                    </div>
                  </Tooltip>
                </span>
                <span className="description">{currentAgent.description}</span>
              </div>
            </div>

            <div className="box-2">
              <div className="abilities">
                {currentAgent.abilities.map((ability, index) => (
                  <Tooltip
                    className="tooltip"
                    key={index}
                    label={
                      <div className="ability-description">
                        <div style={{ fontSize: "19px" }}>
                          {ability.displayName}
                        </div>
                        <div style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                          {ability.description}
                        </div>
                      </div>
                    }
                  >
                    <img src={ability.displayIcon} className="ability-icon" />
                  </Tooltip>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AgentInfoPage;
