import React, { useState } from "react";
import Logo from "../../assets/Logo.svg";
import "./Sidebar.css";
import { sidebarData } from "../../Data/Data";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="Sidebar">
      <div className="logo">
        <img src={Logo} alt="" />
        <span>
          S<span>C</span>D
        </span>
      </div>
      <div className="menu">
        {sidebarData.map((item, index) => (
          <div
            className={selected === index ? "menu-item active" : "menu-item"}
            key={index}
            onClick={() => setSelected(index)}
          >
            <item.icon />
            <div className="title">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
