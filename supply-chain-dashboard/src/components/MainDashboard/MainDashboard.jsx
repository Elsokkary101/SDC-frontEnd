import React from "react";
import "./MainDashboard.css";
import { infoCardData } from "../../Data/Data";
import DetailCard from "../DetailCard/DetailCard";
import Table from "../Table/Table";
const MainDashboard = () => {
  return (
    <div className="main-dashboard">
      <h1>Dashboard</h1>
      <div className="cards">
        {infoCardData.map((data, key) => {
          return (
            <div className="parent-container">
              <DetailCard
                key={key}
                title={data.title}
                value={data.value}
                icon={data.icon}
                time={data.time}
                color={data.color}
                series={data.series}
              />
            </div>
          );
        })}
      </div>
  
      <Table/>
    </div>
  );
};

export default MainDashboard;
