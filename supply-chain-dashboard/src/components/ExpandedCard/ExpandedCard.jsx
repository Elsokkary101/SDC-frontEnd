import React from "react";
import "./ExpandedCard.css";
import { FaXmark } from "react-icons/fa6";
import { data_chart } from "../../Data/Data";
import Chart from "react-apexcharts";
import { motion } from "framer-motion";

const ExpandedCard = ({ param, setExpanded, expanded }) => {

  return (
    <motion.div
      className="ExpandedCard"
      style={{ background: param.color }}
      layoutId="expandableCard"
    >
      <div
        style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}
        onClick={() => setExpanded(false)}
      >
        <FaXmark />
      </div>
      <span>{param.title}</span>
      <div className="chartContainer">
        <Chart
          options={data_chart.options}
          series={param.series}
          type="area"
       
        />
      </div>
    </motion.div>
  );
};

export default ExpandedCard;
