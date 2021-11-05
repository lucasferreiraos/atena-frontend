import { Breadcrumbs, Link, Typography } from "@mui/material";
import React from "react";

import SideBarNavigation from "../../../components/navigation/navigation";

export default function ListProfessor() {
  const modulesArray = ['Docentes', 'Disciplinas', 'Turmas'];
  return(
    <div className="container">
      <section>
      <SideBarNavigation modules={modulesArray} />
      </section>
      <section>
        <Breadcrumbs>
          <Link underline="hover" color="inherit" href="/">Home</Link>
          <Typography color="#8187DC">Professores</Typography>
        </Breadcrumbs>
      </section>
    </div>
  )
};
