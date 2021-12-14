import React from "react";
import Heatmap from "react-calendar-heatmap";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Breadcrumbs, Link } from "@mui/material";

export default function Dashboard() {
  return(
    <div className="main">
      <div className="main__navigation">
        <Sidebar />
      </div>
      <div className="main__core">
        <Breadcrumbs aria-label="breadcrumb">
          <Link>Dashboard</Link>
          <Link>Dashboard</Link>
        </Breadcrumbs>
        <div className="cards"></div>
        <div className="heatmap">
          <p>Carga de trabalho 2021.2</p>
          <Heatmap
            startDate={new Date('2021-01-01')}
            endDate={new Date('2021-06-30')}
            showWeekdayLabels={true}
            monthLabels={["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]}
            weekdayLabels={["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"]}
            values={[
              { date: '2021-01-01', count: 1 },
              { date: '2021-01-22', count: 2 },
              { date: '2021-01-30', count: 0 },

              { date: '2021-02-01', count: 12 },
              { date: '2021-02-22', count: 122 },
              { date: '2021-02-30', count: 38 },

              { date: '2021-03-01', count: 12 },
              { date: '2021-03-22', count: 122 },
              { date: '2021-03-30', count: 38 },

              { date: '2021-04-01', count: 12 },
              { date: '2021-04-22', count: 122 },
              { date: '2021-04-30', count: 38 },

              { date: '2021-05-01', count: 12 },
              { date: '2021-05-22', count: 122 },
              { date: '2021-05-30', count: 38 },
              
              { date: '2021-06-01', count: 12 },
              { date: '2021-06-22', count: 122 },
              { date: '2021-06-30', count: 38 },
            ]}
          />
        </div>
      </div>
    </div>
  );
};