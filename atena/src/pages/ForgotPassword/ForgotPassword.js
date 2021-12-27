import React, { useState } from "react";
import { Alert, Button, Grid, InputAdornment, Paper, TextField, Typography } from "@mui/material";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

function ForgotPassword() {
  const paperStyle = {
    padding: 20,
    height: "30vh",
    width: 500,
    margin: "220px auto",
  };

  const buttonStyle = {
    margin: "8px 0",
    backgroundColor: "#8187DC"
  }

  const [email, setEmail] = useState();
  const [emailSendedSucessfully, setEmailSendedSucessfully] = useState(false);

  const handleSendEmail = (event) => {
    event.preventDefault();
  };

  return(
    <div className="forgot-password">
      <div className="forgot-password__main">
        <div className="forgot-password-form">
          <Grid>
            <Paper elevation={10} style={paperStyle}>
              <Grid align="center">
                <h3>Recuperação de senha</h3>
                <p>Para recuperar sua senha, informe seu endereço de email
                que nós enviaremos um link para a alteração da senha.</p>
              </Grid>
              <div className="email-alert">
                {emailSendedSucessfully
                  ? <Alert severity="success">
                      Tudo certo! Verifique sua caixa de email
                    </Alert>
                  : ""
                }
              </div>
              <TextField
                label="Insira seu e-mail"
                placeholder="E-mail"
                size="small"
                variant="outlined"
                inputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
                fullWidth
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <Button
                variant="contained"
                type="submit"
                style={buttonStyle}
                onClick={e => setEmailSendedSucessfully(true)}
                fullWidth
              >
                Enviar
              </Button>
            </Paper>
          </Grid>
        </div>
      </div>
    </div>
  )
};

export default ForgotPassword;
