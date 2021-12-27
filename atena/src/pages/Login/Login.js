import React, { useState } from "react";
import { Button, Grid, Link, Paper, TextField, Typography } from "@mui/material";

import atenaLogo from "../../assets/images/atena-logo-named-white.png"

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // const [modalIsOpen, setModalIsOpen] = useState(false);

  const paperStyle = {
    padding: 20,
    height: "65vh",
    width: 380,
    margin: "15px auto",
  };

  const buttonStyle = {
    margin: "8px 0",
    backgroundColor: "#8187DC"
  }

  const textInputStyle = {
    color: "#8187DC",
    marginTop: "10px"
  }

  function handleLogin(event) {
    event.preventDefault();
  };
  
  return(
    <div className="login">
      <div className="login__main">
        <section className="welcome">
        </section>
        <section className="login-form">
          <form onSubmit={handleLogin}>
            <Grid>
              <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                  <img src={atenaLogo} alt="Logo"></img>
                </Grid>
                <p>Gerencie sua rotina e sua agenda visualizando sua carga de trabalho durante o semestre</p>
                <TextField
                  style={textInputStyle}
                  label="E-mail"
                  placeholder="E-mail"
                  size="small"
                  variant="outlined"
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                  fullWidth
                />
                <TextField
                  style={textInputStyle}
                  label="Senha"
                  placeholder="Senha"
                  size="small"
                  variant="outlined"
                  value={password}
                  onChange={event => setPassword(event.target.value)}
                  fullWidth
                />
                <Button
                  variant="contained"
                  type="submit"
                  style={buttonStyle}
                  fullWidth
                >
                  Entrar
                </Button>
                <div className="login-footer">
                  <p><a href="/redefinir-senha">Esqueceu a senha?</a></p>
                  <p>Ainda não tem uma conta?<a href="/#"> Registre-se</a></p>
                </div>
              </Paper>
            </Grid>
          </form>
        </section>
      </div>
      {/* <section className="login__foot">
        <p>2021 - Atena Project</p>
      </section> */}
    </div>
  )
};

export default Login;
