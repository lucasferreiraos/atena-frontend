import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import GoogleLogin from "react-google-login";

import "./styles.scss";

import atenaLogo from "../../assets/images/atena-logo-named-white.png";

export default function Login() {
  const [isLoogedIn, setIsLoggedIn] = useState(false);
  
  const responseGoogle = (response) => {
    console.log(response);
    setIsLoggedIn(true);
  }
  return (
    <div className="container">
      <section className="hello">
        <img className="logo" src={atenaLogo} alt="Logo" />
        <p>
          Gerencie sua rotina e sua agenda<br />
          visualizando sua carga de trabalho<br />
          durante o semestre<br />
        </p>
      </section>
      <section className="login-container">
        <GoogleLogin 
          clientId='1025345621097-t9hdt9ukgoaesco0lv1hrahn0dmt119g.apps.googleusercontent.com'
          buttonText='Fazer login com o Google'
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
        { isLoogedIn ? <Redirect to="/home" /> : <Redirect to="/register" /> }
      </section>
    </div>
  )
};