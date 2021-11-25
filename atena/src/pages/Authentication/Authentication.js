import React from "react";
import GoogleLogin from "react-google-login";

import atenaLogo from "../../assets/images/atena-logo-named-purple.png"

function Authentication() {
  const responseGoogle = (response) => {
    console.log(response);
  };
  return(
    <div className="authentication">
      <div className="authentication__main">
        <section className="welcome">
          <img src={atenaLogo} alt="Logo"></img>
          <p>
            Gerencie sua rotina e sua agenda visualizando sua carga de trabalho durante o semestre
          </p>
        </section>
        <section className="google">
          <GoogleLogin
            clientId="1025345621097-t9hdt9ukgoaesco0lv1hrahn0dmt119g.apps.googleusercontent.com"
            buttonText="Fazer login com o Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
        </section>
      </div>
      <section className="authentication__foot">
        <p>@ 2021 Atena Project</p>
      </section>
    </div>
  )
};

export default Authentication;
