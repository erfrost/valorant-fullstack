/* eslint-disable react/prop-types */
import "./SkinLevels.css";

const SkinLevels = ({ skin }) => {
  return (
    <div className="levels">
      <span className="skin-title">Levels</span>
      <div className="levels-list">
        {skin.levels.map((lvl, index) => (
          <div className="level-item" key={lvl.uuid}>
            <span className="lvl-number">Level {index + 1}</span>
            <video className="video" controls loop>
              <source src={lvl.streamedVideo} type="video/mp4"></source>
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkinLevels;
