import React from "react";

import "./styles.scss";
import atenaLogo from "../../assets/images/atena-logo-named-white.png";

export default function Register() {
  return (
    <div className="container">
      <section className="welcome">
        <img src={atenaLogo} alt="Logo" />
        <p>
          Olá, <strong>Mateus Asato</strong>!<br />
          Bem-vindo(a) ao sistema Atena<br />
          Você é:<br />
        </p>
      </section>
      <section className="buttons">
      </section>
    </div>
  )
};
