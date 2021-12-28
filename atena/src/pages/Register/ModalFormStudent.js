import { Button, Grid, TextField } from "@mui/material";
import { padding, width } from "@mui/system";
import React, { useState } from "react";
import Modal from "../../components/Modal/Modal";

function ModalFormStudent(props) {
  const closeModal = props.onClose;

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [registration, setRegistration] = useState();
  const [password, setPassword] = useState();

  const buttonCancelStyle = {
    marginTop: 20,
    margin: "8px 4px",
    borderColor: "#8187DC",
    color: "#8187DC",
    width: "48.5%",
  }
  const buttonSaveStyle = {
    marginTop: 20,
    margin: "8px 4px",
    backgroundColor: "#8187DC",
    width: "48.5%",
  }

  function handleSubmit(event) {
    event.prevenDefault();
  };

  return(
    <Modal modalTitle={"Nova conta"} onClose={closeModal}>
      <div className="modal-form-student">
        <form onSubmit={handleSubmit}>
          <TextField
            label="Insira seu nome completo"
            placeholder="Nome completo"
            size="small"
            variant="outlined"
            margin="dense"
            fullWidth
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <TextField
            label="Insira seu número de matrícula"
            placeholder="Matrícula"
            size="small"
            variant="outlined"
            margin="dense"
            fullWidth
            value={registration}
            onChange={e => setRegistration(e.target.value)}
          />
          <TextField
            label="Insira seu e-mail"
            placeholder="E-mail"
            size="small"
            variant="outlined"
            margin="dense"
            fullWidth
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            label="Insira uma senha"
            placeholder="Senha"
            size="small"
            variant="outlined"
            margin="dense"
            fullWidth
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button
            variant="outlined"
            style={buttonCancelStyle}
            onClick={closeModal}
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            variant="contained"
            style={buttonSaveStyle}
          >
            Salvar
          </Button>
        </form>
      </div>
    </Modal>
  )
};

export default ModalFormStudent;
