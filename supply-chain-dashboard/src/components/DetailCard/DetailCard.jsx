import React, { useEffect } from "react";

import { useState } from "react";

import { LayoutGroup } from "framer-motion";
import CompactCard from "../CompactCard/CompactCard";
import ExpandedCard from "../ExpandedCard/ExpandedCard";

const DetailCard = (props) => {
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    console.log("expanded", expanded);}
  , [expanded])
  return (
    <LayoutGroup>
      {expanded ? (
        <ExpandedCard
          param={props}
          
          setExpanded={setExpanded}
        />
      ) : (
        <CompactCard
          param={props}
          // expanded={expanded}
          setExpanded={setExpanded}
        />
      )}
    </LayoutGroup>
  );
};

export default DetailCard;
