import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./LoginBtn.css";

const LoginBtn = () => {
  return (
    <Button className="login-btn">
      <Link className="link" to="/login">
        Login
      </Link>
    </Button>
  );
};

export default LoginBtn;
