import { Link, useParams } from "react-router-dom";
import "./MapInfoPage.css";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { getMaps } from "../../api/getMaps";
import { mapsState } from "../../storage/atoms/main";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import Header from "../../components/Header/Header";
import RouteBack from "../../components/RouteBack/RouteBack";

const MapInfoPage = () => {
  const [maps, setMaps] = useRecoilState(mapsState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentMap, setCurrentMap] = useState(null);

  const { mapName } = useParams();

  const get = async () => {
    try {
      setLoading(true);
      const res = await getMaps();
      const data = await res.json();
      setMaps(data.data);
      setLoading(false);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    !maps.length ? get() : setLoading(false);
  }, []);

  useEffect(() => {
    setCurrentMap(
      maps?.find((agent) => agent.displayName.toLowerCase() === mapName)
    );
  }, [maps, mapName]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error get={get} />
      ) : (
        <div className="container">
          <Header />
          <RouteBack path="/maps" />
          <div className="mapInfoPage-container">
            <div className="mapInfoPage-content">
              <span className="map-info-title">{currentMap.displayName}</span>
              <img
                className="map-info-image"
                src={currentMap.displayIcon || currentMap.splash}
                alt="displayIcon"
              />
              <span className="coordinates">{currentMap.coordinates}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MapInfoPage;
