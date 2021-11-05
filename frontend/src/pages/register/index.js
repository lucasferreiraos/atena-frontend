import React, { useState } from "react";
import Select from "@mui/material/Select"
import { MenuItem } from "@mui/material";
import Button from "@mui/material/Button";

import "./styles.scss";
import atenaLogo from "../../assets/images/atena-logo-named-white.png";
import { useHistory } from "react-router-dom";

export default function Register() {
  const [profileType, setProfileType] = useState('');

  const history = useHistory();

  const handleChange = (event) => {
    setProfileType(event.target.value);
  }

  const redirectToForm = () => {
    history.push("/register/form");
  }

  return (
    <div className="container">
      <section className="welcome">
        <img src={atenaLogo} alt="Logo" />
        <p>
          Olá, <strong>Mateus Asato</strong>!<br />
          Bem-vindo(a) ao sistema Atena<br />
        </p>
        <p>Selecione seu perfil:</p>
      </section>
      <section className="select-profile">
        {/* <InputLabel id="select-label">Escolha seu perfil</InputLabel> */}
        <Select
          id="demo"
          value={profileType}
          label="select-label"
          onChange={handleChange}
          size="small"
        >
          <MenuItem value={'PR'}>Professor(a)</MenuItem>
          <MenuItem value={'ST'}>Estudante</MenuItem>
          <MenuItem value={'AC'}>Centro acadêmico</MenuItem>
        </Select>
        <Button
          id="button-next"
          variant="contained"
          onClick={redirectToForm}
        >
          Próximo
        </Button>
      </section>
    </div>
  )
};
