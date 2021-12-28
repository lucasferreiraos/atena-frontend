import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, Button, Grid, InputAdornment, Paper, TextField } from "@mui/material";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function ForgotPassword() {
  const paperStyle = {
    padding: 20,
    height: "auto",
    width: 500,
    margin: "220px auto",
  };

  const buttonStyle = {
    margin: "8px 0",
    backgroundColor: "#8187DC"
  }

  const backButtonStyle = {
    borderColor: "#8187DC",
    color: "#8187DC"
  }

  const [email, setEmail] = useState();
  const [emailSendedSucessfully, setEmailSendedSucessfully] = useState(false);

  const navigate = useNavigate()

  const handleSendEmail = (event) => {
    event.preventDefault();
    setEmailSendedSucessfully(true);
  };

  function backLoginPage() {
    navigate("/");
  }

  return(
    <div className="forgot-password">
      <div className="forgot-password__main">
        <div className="forgot-password-form">
          <Grid>
            <Paper elevation={10} style={paperStyle}>
              <Grid align="center">
                <p className="title">
                  Recuperação de senha
                </p>
                <p className="description">
                  Para recuperar sua senha, informe seu endereço de email
                  que nós enviaremos um link para a alteração da senha
                </p>
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
                onClick={handleSendEmail}
                fullWidth
              >
                Enviar
              </Button>

              <div className="back">
                <Button
                  size="small"
                  variant="outlined"
                  startIcon={<ArrowBackIcon />}
                  style={backButtonStyle}
                  onClick={backLoginPage}
                >
                  Voltar
                </Button>
              </div>
            </Paper>
          </Grid>
        </div>
      </div>
    </div>
  )
};

export default ForgotPassword;
