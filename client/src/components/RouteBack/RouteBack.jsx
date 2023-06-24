import { ChevronLeftIcon } from "@chakra-ui/icons";
import "./RouteBack.css";
import { Link } from "react-router-dom";
import { IconButton } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
const RouteBack = ({ path }) => {
  return (
    <div className="route-back">
      <Link to={path}>
        <IconButton
          className="icon-btn"
          icon={
            <ChevronLeftIcon
              style={{ cursor: "pointer" }}
              boxSize={8}
              color="white"
            />
          }
        />
      </Link>
    </div>
  );
};

export default RouteBack;
