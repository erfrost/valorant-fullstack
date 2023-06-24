import { useEffect, useState } from "react";
import "./RegisterPage.css";
import { Alert, AlertIcon, Button, Checkbox, Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { signUp } from "../../api/signUp";

const RegisterPage = () => {
  const [nickname, setNickname] = useState({ title: "", error: false });
  const [email, setEmail] = useState({ title: "", error: false });
  const [password, setPassword] = useState({ title: "", error: false });
  const [confirmPassword, setConfirmPassword] = useState({
    title: "",
    error: false,
  });

  const [checkbox, setCheckbox] = useState(true);
  const [passwordError, setPasswordError] = useState(false);
  const [RunTimeout, setRunTimeout] = useState(false);
  const [reqError, setReqError] = useState(false);

  const handleSubmit = async () => {
    if (password.title !== confirmPassword.title) {
      setPasswordError(true);
      return;
    } else {
      setPasswordError(false);
    }
    try {
      const response = await signUp(
        nickname.title,
        email.title,
        password.title
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      setReqError(true);
    }
  };

  useEffect(() => {
    setTimeout(() => setRunTimeout(false), 5000);
  }, [RunTimeout]);

  //сделать alert при ошибке запроса

  return (
    <div className="auth-container">
      <div className="auth-box">
        <span className="auth-title">Register</span>
        <Input
          placeholder="Email"
          className={`text-field ${email.error ? "text-field-error" : ""}`}
          value={email.title}
          onChange={(e) =>
            setEmail(() => {
              const value = e.target.value;
              if (value === "") {
                return { error: true, title: value };
              } else {
                return { error: false, title: value };
              }
            })
          }
        />
        <Input
          placeholder="Nickname"
          className={`text-field ${nickname.error ? "text-field-error" : ""}`}
          value={nickname.title}
          onChange={(e) =>
            setNickname(() => {
              const value = e.target.value;
              if (value === "" || value.length < 6) {
                return { error: true, title: value };
              } else {
                return { error: false, title: value };
              }
            })
          }
        />
        <Input
          placeholder="Password"
          className={`text-field ${password.error ? "text-field-error" : ""}`}
          value={password.title}
          onChange={(e) =>
            setPassword(() => {
              const value = e.target.value;
              if (value === "" || value.length < 8) {
                return { error: true, title: value };
              } else {
                return { error: false, title: value };
              }
            })
          }
        />
        <Input
          placeholder="Confirm password"
          className={`text-field ${
            confirmPassword.error ? "text-field-error" : ""
          }`}
          value={confirmPassword.title}
          onChange={(e) =>
            setConfirmPassword(() => {
              const value = e.target.value;
              if (value === "" || value.length < 8) {
                return { error: true, title: value };
              } else {
                return { error: false, title: value };
              }
            })
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
          <Link className="link options-link" to="/login">
            Already have an account?
          </Link>
        </div>
        <Button className="auth-btn" onClick={() => handleSubmit()}>
          Move on
        </Button>
      </div>
    </div>
  );
};

export default RegisterPage;
