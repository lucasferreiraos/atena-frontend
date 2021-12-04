import React from "react";
import { Button, Stack, createTheme, ThemeProvider } from "@mui/material";
// import {  } from "@mui/material/styles";
// import Button from "../../components/Button";

import atenaLogo from "../../assets/images/atena-logo-named-purple.png";

const theme = createTheme({
  palette: {
    violet: {
      main: "#FFF",
      contrastText: "#8187DC"
    },
  },
});

function ChooseProfile(props){
  return(
    <div className="choose-profile">
      <div className="choose-profile__part1">
        <img src={atenaLogo} alt="Logo" />
        <div className="text">
          <p>Olá, Júlia Joana!</p>
          <p>Bem-vindo(a) ao sistema Atena.</p>
          <br />
          <br />
          <br />
          <p>Você é:</p>
        </div>
      </div>
      <div className="choose-profile__part2">
        <Stack
          spacing={2}
          direction="row"
          justifyContent="center"
        >
          <ThemeProvider theme={theme}>
            <Button color="violet" variant="contained">Professor(a)</Button>
            <Button color="violet" variant="contained">Estudante</Button>
          </ThemeProvider>
        </Stack>  
      </div>
    </div>
  )
};

export default ChooseProfile;
