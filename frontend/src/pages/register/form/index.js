import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Paper } from "@mui/material";

import "./styles.scss";
import atenaLogo from "../../../assets/images/atena-logo-named-white.png";
import { borderColor } from "@mui/system";
import { useHistory } from "react-router-dom";

export default function FormRegister() {
  const history = useHistory();
  
  const handleSave = () => {
    history.push("/home");
  };
  const handleBack = () => {
    history.push("/register");
  };
  
  return (
    <div className="container">
      <section className="atena-logo">
        <img src={atenaLogo} alt="Logo" />
      </section>
      <form className="form-register">
        <Paper elevation={8}>
          <Box
            component="form"
            sx={{
              width: '455px',
              height: '470px',
            }}
          >
            <div className="description">
              <p>
                Preencha seus dados<br />
                e finalize seu registro
              </p>
            </div>
            <div className="fields">
              <TextField
                fullWidth
                variant="outlined"
                label="Nome"
                size="small"
                margin="normal"
              />
              <TextField
                fullWidth
                variant="outlined"
                label="E-mail"
                size="small"
                margin="normal"
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Matrícula"
                size="small"
                margin="normal"
              />
            </div>
            <div className="buttons">
              <Button
                sx={{
                  borderColor: '#8187DC',
                  color: '#8187DC'
                }}
                id="button-back"
                variant="outlined"
                size="large"
                onClick={handleBack}
              >
                VOLTAR
              </Button>
              <Button
                id="button-save"
                variant="contained"
                size="large"
                onClick={handleSave}
              >
                SALVAR
              </Button>
            </div>
          </Box>
        </Paper>
      </form>
    </div>
  )
}
