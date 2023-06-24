import { useParams } from "react-router-dom";
import "./SkinPage.css";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import Header from "../../components/Header/Header";
import RouteBack from "../../components/RouteBack/RouteBack";
import { useEffect, useState } from "react";
import { getSkins } from "../../api/getSkins";
import { findCurrentSkins } from "../../utils/findCurrentSkins";
import SkinChromas from "../../components/SkinChromas/SkinChromas";
import SkinLevels from "../../components/SkinLevels/SkinLevels";

const SkinPage = () => {
  const { skinName, weaponName } = useParams();
  const [skin, setSkin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  console.log(skinName, weaponName);

  const get = async () => {
    try {
      setLoading(true);
      const res = await getSkins();
      const data = await res.json();
      const currentSkins = findCurrentSkins(data.data, weaponName);
      setSkin(currentSkins.find((item) => item.displayName === skinName));
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

  console.log(skin);

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error get={get} />
      ) : (
        <div className="container">
          <Header />
          <RouteBack path={`/weapons/${weaponName}`} />
          <div className="SkinPage">
            <div className="skin-title">{skin.displayName}</div>
            {skin.chromas ? <SkinChromas skin={skin} /> : null}
            {skin.levels.length > 1 ? (
              <SkinLevels skin={skin} />
            ) : (
              <span className="skin-title">
                This colorway has no upgrade levels
              </span>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SkinPage;
