import React, { useState } from "react";

import { Button, Grid, Paper } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openModalProfessor, openModalStudent } from "../../redux/ducks/modal";

import ModalRequestProfessor from "./ModalRequestProfessor";
import ModalFormStudent from "./ModalFormStudent";

function Register(){
  const [modalProfessorIsOpen, setModalProfessorIsOpen] = useState(false);
  const [modalStudentIsOpen, setModalStudentIsOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleModalProfessor() {
    dispatch(openModalProfessor());
    setModalProfessorIsOpen(true);
  };

  function handleModalStudent() {
    dispatch(openModalStudent());
    setModalStudentIsOpen(true);
  };

  const paperStyle = {
    padding: 20,
    height: "auto",
    width: 500,
    margin: "220px auto",
  };

  const buttonProfessor = {
    backgroundColor: "#8187DC"
  }

  const buttonStudent = {
    backgroundColor: "#8187DC",
    marginTop: 5
  }

  const backButtonStyle = {
    borderColor: "#8187DC",
    color: "#8187DC"
  }

  function backLoginPage() {
    navigate("/");
  }

  console.log(modalProfessorIsOpen);
  console.log(modalStudentIsOpen);

  return(
    <div className="register">
      <div className="register__part1">  
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <p className="title">Registro</p>
            <p className="description">Para criar sua conta, precisamos saber que tipo de usuário(a) você é:</p>        
            <Button
              fullWidth
              variant="contained"
              size="small"
              onClick={(event) => {handleModalProfessor()}}
              style={buttonProfessor}
            >
              Professor(a)
            </Button>
            <Button
              fullWidth
              variant="contained"
              size="small"
              onClick={(event) => {handleModalStudent()}}
              style={buttonStudent}
            >
              Aluno(a)
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
        {modalProfessorIsOpen
          ? (<ModalRequestProfessor onClose={() => setModalProfessorIsOpen(false)}/>)
          : null
        }
        {modalStudentIsOpen
          ? (<ModalFormStudent onClose={() => setModalStudentIsOpen(false)}/>)
          : null
        }
      </div>
      <div className="register__part2"></div>
    </div>
  )
};

export default Register;
