/* eslint-disable react/no-unescaped-entities */
import { Button, Checkbox, Input } from "@chakra-ui/react";
import "./LoginPage.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [input, setInput] = useState([
    { title: "email", text: "", error: false },
    { title: "password", text: "", error: false },
  ]);
  const [checkbox, setCheckbox] = useState(true);
  const [uncorrect, setUncorrect] = useState(false);

  const handleSubmit = () => {
    setInput((prevState) =>
      prevState.map((item) => {
        if (item.text === "" || item.text.length < 7)
          return { ...item, error: true };
        else return { ...item, error: false };
      })
    );
  };
  console.log(checkbox);

  return (
    <div className="auth-container">
      <div className="auth-box">
        <span className="auth-title">Login</span>
        <Input
          placeholder="Phone"
          className={`text-field ${input[0].error ? "text-field-error" : ""}`}
          value={input[0].text}
          onChange={(e) =>
            setInput((prevState) =>
              prevState.map((item, index) => {
                if (index === 0) return { ...item, text: e.target.value };
                else return item;
              })
            )
          }
        />
        <Input
          placeholder="Password"
          className={`text-field ${input[1].error ? "text-field-error" : ""}`}
          value={input[1].text}
          onChange={(e) =>
            setInput((prevState) =>
              prevState.map((item, index) => {
                if (index === 1) return { ...item, text: e.target.value };
                else return item;
              })
            )
          }
        />
        <div className="options">
          <Checkbox
            defaultChecked
            className="login-checkbox"
            value={checkbox}
            onChange={() => setCheckbox((prevState) => !prevState)}
          >
            Запомнить меня
          </Checkbox>
          <Link className="link options-link" to="/register">
            You don't have an account?
          </Link>
        </div>
        <Button className="auth-btn" onClick={() => handleSubmit()}>
          Move on
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
