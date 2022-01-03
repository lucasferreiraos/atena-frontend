import React, { useState } from "react";
import { Alert, Button, TextField } from "@mui/material";
import Modal from "../../components/Modal/Modal";

function ModalRequestProfessor(props) {
  const closeModal = props.onClose; 
  const [email, setEmail] = useState();
  const [emailSendedSucessfully, setEmailSendedSucessfully] = useState(false);

  const buttonStyle = {
    margin: "8px 0",
    backgroundColor: "#8187DC"
  }

  return(
    <Modal modalTitle={"Solicitação de conta"} onClose={closeModal}>
      <div className="modal-request-professor">
        <div className="description">
          <p>Para solicitar uma conta de usuário, insira seu e-mail e te enviaremos as credenciais para você acessar o sistema.</p>
        </div>
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
          fullWidth
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Button
          fullWidth
          variant="contained"
          style={buttonStyle}
          onClick={() => setEmailSendedSucessfully(true)}
        >
          Enviar
        </Button>
      </div>
    </Modal>
  )
};

export default ModalRequestProfessor;
