import { useState } from "react";
import Header from "../../components/Header/Header";
import "./LevelBordersPage.css";
import { getLevelBorders } from "../../api/getLevelBorders";
import { useEffect } from "react";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import Pagination from "../../components/Pagination/Pagination";
import { useRef } from "react";

const LevelBorders = () => {
  const [borders, setBorder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const allItems = useRef(null);

  const get = async () => {
    try {
      setLoading(true);
      const response = await getLevelBorders();
      const data = await response.json();
      setBorder(data.data);
      allItems.current = data.data;
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    !borders ? get() : null;
  }, []);

  console.log(borders);

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error get={get} />
      ) : (
        <div className="container">
          <Header />
          <div className="levelBorders-container">
            {borders.map((border) => (
              <div className="border-item" key={border.uuid}>
                <span className="border-level">
                  {border.startingLevel + " Lvl"}
                </span>
                <div className="border-icons">
                  <img
                    src={border.levelNumberAppearance}
                    alt="levelAppearance"
                  />
                  <img
                    src={border.smallPlayerCardAppearance}
                    alt="levelCardAppearance"
                  />
                </div>
              </div>
            ))}
          </div>
          <Pagination
            setItems={setBorder}
            itemsRef={allItems.current}
            itemsPerPage={9}
          />
        </div>
      )}
    </>
  );
};

export default LevelBorders;
