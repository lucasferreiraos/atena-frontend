import { Button, Grid, Paper } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import atenaLogo from "../../assets/images/atena-logo-horizontal-purple.png";
// import ModalRequestProfessor from "./ModalRequestProfessor";
import ModalFormStudent from "./ModalFormStudent";

function Register(){
  // const [isProfessor, setIsProfessor] = useState("");
  const [modalProfessorIsOpen, setModalProfessorIsOpen] = useState(false);
  const [modalStudentIsOpen, setModalStudentIsOpen] = useState(false);

  const navigate = useNavigate()

  const paperStyle = {
    padding: 20,
    height: "auto",
    width: 500,
    margin: "20px auto",
  };

  const buttonStyle = {
    margin: "8px 0",
    backgroundColor: "#8187DC"
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
        <img src={atenaLogo} alt="logo"/>
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            
              <p className="title">Registro</p>
              <p className="description">Para criar sua conta, precisamos saber que tipo de usuário(a) você é:</p>
            
            <Button
              fullWidth
              variant="contained"
              size="small"
              onClick={
                (event) => {
                  // setIsProfessor(true)
                  setModalProfessorIsOpen(true)
                }
              }
              style={buttonStyle}
            >
              Professor(a)
            </Button>
            <Button
              fullWidth
              variant="contained"
              size="small"
              onClick={
                (event) => {
                  // setIsProfessor(false)
                  setModalStudentIsOpen(true)
                }
              }
              style={buttonStyle}
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
        {/* {modalProfessorIsOpen
          ? (<ModalRequestProfessor onClose={() => setModalProfessorIsOpen(false)}/>)
          : null
        } */}
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
