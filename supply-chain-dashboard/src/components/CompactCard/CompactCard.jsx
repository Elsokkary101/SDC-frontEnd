import React from "react";
import { motion } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./CompactCard.css";
const CompactCard = ({ param, setExpanded }) => {
  const Png = param.icon;
  return (
    <div
      className="CompactCard"
      style={{ background: param.color }}
      onClick={() => setExpanded(true)}
      layoutId="expandableCard"
    >
      <div className="radialBar">
        <h3>{param.title}</h3>
        <CircularProgressbar value={param.value} text={`${param.value}%`} />
      </div>
      <div className="detail">
        <Png />
        <span>${param.value}</span>
        <span>{param.time}</span>
      </div>
    </div>
  );
};

export default CompactCard;
