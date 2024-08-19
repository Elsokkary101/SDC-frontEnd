import React from 'react'
import './Status.css'
const Status = ({status}) => {
  return (
    <div className='Status'>
        <div className="circleStatus" style={
            {backgroundColor: status === "Delivered" ? "#00FF00" : status === "Pending" ? "#FFA500" : "#FF0000"}
        }></div>
        <p>{status}</p>
    </div>
  )
}

export default Status