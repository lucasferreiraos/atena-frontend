import React from "react";

import SideBarNavigation from "../../../components/navigation/navigation";

export default function Home() {
  const modulesArray = ['Docentes', 'Disciplinas', 'Turmas'];
  return (
    <div className="container">
      <SideBarNavigation
        modules={modulesArray}
      />
    </div>
  )
};
