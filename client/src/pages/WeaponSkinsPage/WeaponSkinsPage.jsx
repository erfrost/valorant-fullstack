import { useRecoilState } from "recoil";
import "./WeaponSkinsPage.css";
import { skinsState } from "../../storage/atoms/main";
import { useEffect, useState } from "react";
import { getSkins } from "../../api/getSkins";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import Header from "../../components/Header/Header";
import RouteBack from "../../components/RouteBack/RouteBack";
import { Link, useParams } from "react-router-dom";
import { findCurrentSkins } from "../../utils/findCurrentSkins";
import Pagination from "../../components/Pagination/Pagination";
import { useRef } from "react";

const WeaponSkinsPage = () => {
  const [skins, setSkins] = useRecoilState(skinsState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const allSkins = useRef(null);

  const { weaponName } = useParams();

  const get = async () => {
    try {
      setLoading(true);
      const res = await getSkins();
      const data = await res.json();
      const currentSkins = findCurrentSkins(data.data, weaponName);
      allSkins.current = currentSkins;
      setSkins(currentSkins);
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

  console.log(weaponName);

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error get={get} />
      ) : (
        <div className="container">
          <Header />
          <RouteBack path="/weapons" />
          <div className="weaponSkinsPage">
            {skins.map((skin) => (
              <Link
                className="skin-item link"
                to={skin.displayName}
                key={skin.uuid}
                style={
                  weaponName === "frenzy" ||
                  weaponName === "classic" ||
                  weaponName === "sheriff"
                    ? {
                        backgroundImage: `url(${skin.displayIcon})`,
                        backgroundSize: "40% auto",
                      }
                    : { backgroundImage: `url(${skin.displayIcon})` }
                }
              >
                <span className="skinName">{skin.displayName}</span>
              </Link>
            ))}
          </div>
          <Pagination
            setItems={setSkins}
            itemsRef={allSkins.current}
            itemsPerPage={4}
          />
        </div>
      )}
    </>
  );
};

export default WeaponSkinsPage;
