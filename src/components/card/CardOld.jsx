import React from "react";

function Card(props) {
  console.log("props ::  ", props);
  // let iconName = props.icon + ".png";

  return (
    <div className="card m-5" style={{ width: "18rem", marginTop: "10px" }}>
      <div className="card-body">
        {/* <img className="card-image" src="{iconName}"></img> */}
        <h5 className="card-title">CITY : {props.city}</h5>
        <p className="card-text">COUNTRY : {props.country}</p>
        <p>{props.city}</p>
        <p className="card-text">TEMPERATURE : {props?.temp}</p>
      </div>
    </div>
  );
}

export default Card;
