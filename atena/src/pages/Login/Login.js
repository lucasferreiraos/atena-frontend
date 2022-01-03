import React, { useState } from "react";

import { Button, Grid, Paper, TextField } from "@mui/material";

import atenaLogo from "../../assets/images/atena-logo-named-white.png"

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const paperStyle = {
    padding: 20,
    height: "auto",
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
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
              <img src={atenaLogo} alt="Logo"></img>
            </Grid>
            <p>
              Gerencie sua rotina e sua agenda visualizando sua carga
              de trabalho durante o semestre
            </p>
            <section className="login-form">
              <form onSubmit={handleLogin}>
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
              </form>
            </section>
            <div className="login-footer">
              <p><a href="/redefinir-senha">Esqueceu a senha?</a></p>
              <br />
              <p>Ainda não tem uma conta? <a href="/registro">Registre-se</a></p>
            </div>
          </Paper>
        </Grid>
      </div>
    </div>
  )
};

export default Login;
