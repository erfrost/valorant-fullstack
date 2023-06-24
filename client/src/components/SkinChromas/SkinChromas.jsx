/* eslint-disable react/prop-types */
import {
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import "./SkinChromas.css";

const SkinChromas = ({ skin }) => {
  return (
    <div className="skin-chromas">
      {skin.chromas.map((chroma) => (
        <Popover key={chroma.uuid}>
          <PopoverTrigger>
            <div className="chomas-block">
              <img
                src={chroma.fullRender}
                alt="chroma"
                className="chroma-image"
              />
              {chroma.swatch ? (
                <img
                  src={chroma.swatch}
                  alt="swatch"
                  className="chroma-swatch"
                />
              ) : null}
            </div>
          </PopoverTrigger>
          <PopoverContent className="popover-content">
            <PopoverBody>
              {chroma.streamedVideo ? (
                <div className="tooltip-videos">
                  <video className="video" controls autoPlay loop>
                    <source
                      src={chroma.streamedVideo}
                      type="video/mp4"
                    ></source>
                  </video>
                </div>
              ) : (
                <span className="video-error">
                  This coloring page has no pre-screening
                </span>
              )}
            </PopoverBody>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  );
};

export default SkinChromas;
