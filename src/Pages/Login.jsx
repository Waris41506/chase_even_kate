import React, { useState } from "react";
import "./Login.css";

const Login = ({ login, passCode, username, geterateCode }) => {
  const [userName, SetUsername] = useState();
  const [code, SetCode] = useState();
  const [showCode, SetShowCode] = useState(false);

  const handleChangeUsername = (e) => {
    SetUsername(e.target.value);
  };
  const handleChangeCode = (e) => {
    SetCode(e.target.value);
  };

  if (userName !== username || code !== passCode) {
    localStorage.setItem("isOk", false);
  } else {
    localStorage.setItem("isOk", true);
    localStorage.setItem("isLogin", true);
  }

  let lastTap = 0;
  const handleShowCode = () => {
    const now = Date.now();
    const doubleTapDelay = 300;

    if (now - lastTap < doubleTapDelay) {
      SetShowCode(true);
    } else {
      SetShowCode(false);
    }
    lastTap = now;
  };

  return (
    <div className="login-con">
      {passCode ? (
        <h3 className="code" onClick={handleShowCode}>
          {showCode ? `${passCode}` : "****"}
        </h3>
      ) : (
        ""
      )}

      <h2>Login</h2>
      <form action="">
        <input
          type="text"
          placeholder="Username"
          onChange={handleChangeUsername}
        />
        <input type="text" placeholder="code" onChange={handleChangeCode} />
        <button className="btn-code " onClick={geterateCode}>
          Get Code{" "}
        </button>
        <button className="btn-login " onClick={login}>
          Login{" "}
        </button>
      </form>

      <div className="show" onClick={() => SetShowCode(!showCode)}></div>
    </div>
  );
};

export default Login;
