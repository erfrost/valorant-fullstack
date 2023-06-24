import { Button } from "@chakra-ui/react";
import "./Error.css";

const Error = (get) => {
  return (
    <div className="error">
      <div className="error-content">
        Произошла ошибка загрузки
        <Button className="chakra-btn" onClick={() => get()}>
          Попробовать снова
        </Button>
      </div>
    </div>
  );
};

export default Error;
