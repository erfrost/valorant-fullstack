/* eslint-disable react-hooks/exhaustive-deps */
import { useRecoilState } from "recoil";
import "./MapsPage.css";
import { mapsState } from "../../storage/atoms/main";
import { useEffect, useState } from "react";
import { getMaps } from "../../api/getMaps";
import Header from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import { Link } from "react-router-dom";

const MapsPage = () => {
  const [maps, setMaps] = useRecoilState(mapsState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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
    get();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error get={get} />
      ) : (
        <div className="container">
          <Header />
          <div className="mapsPage">
            {maps.map((map) => (
              <Link
                to={`/maps/${map.displayName.toLowerCase()}`}
                key={map.uuid}
                className="map-item"
                style={{ backgroundImage: `url(${map.splash})` }}
              ></Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MapsPage;
