import React, { useState } from "react";
import { Button, Grid, Link, Paper, TextField, Typography } from "@mui/material";

import atenaLogo from "../../assets/images/atena-logo-named-white.png"

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // const [modalIsOpen, setModalIsOpen] = useState(false);

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 380,
    margin: "20px auto",
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
                <TextField
                  style={textInputStyle}
                  label="E-mail"
                  placeholder="E-mail"
                  size="small"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  style={textInputStyle}
                  label="Senha"
                  placeholder="Senha"
                  size="small"
                  variant="outlined"
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
                <Typography><Link>Esqueceu a senha?</Link></Typography>
                <Typography>Ainda não tem uma conta?<Link>Registre-se</Link></Typography>
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
