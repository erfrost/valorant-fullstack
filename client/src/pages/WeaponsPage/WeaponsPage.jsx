import { useRecoilState } from "recoil";
import "./WeaponsPage.css";
import { weaponsState } from "../../storage/atoms/main";
import { useEffect, useState } from "react";
import { getWeapons } from "../../api/getWeapons";
import Header from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import { Link } from "react-router-dom";

const WeaponsPage = () => {
  const [weapons, setWeapons] = useRecoilState(weaponsState);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const get = async () => {
    try {
      setLoading(true);
      const res = await getWeapons();
      const data = await res.json();
      setWeapons(data.data);
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

  console.log(weapons);

  return (
    <div className="container">
      <Header />
      {loading ? (
        <Loading />
      ) : error ? (
        <Error get={get} />
      ) : (
        <div className="weaponsPage">
          {weapons.map((weapon) => (
            <Link
              to={`/weapons/${weapon.displayName.toLowerCase()}`}
              className="weapon-box link"
              key={weapon.uuid}
            >
              <span className="weapon-name">{weapon.displayName}</span>
              <img
                src={weapon.displayIcon}
                alt="weapon-image"
                className="weapon-image"
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default WeaponsPage;
