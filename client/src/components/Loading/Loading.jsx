import { Spinner } from "@chakra-ui/react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <Spinner size="xl" className="spinner" />
    </div>
  );
};

export default Loading;
