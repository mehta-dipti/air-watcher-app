import React from "react";

function MiniCard(props) {
  return (
    <div
      className="card m-2 col-md-3"
      style={{ width: "18rem", marginTop: "10px" }}
    >
      <div className="card-body">
        {/* <img className="card-image" src="{iconName}"></img> */}
        <h5 className="card-title">{props?.cityDataProps?.city}</h5>
        <p className="card-text">({props?.cityDataProps?.country})</p>
        <p className="card-text">
          AQI : {props?.cityDataProps?.current?.pollution?.aqius}
        </p>
      </div>
    </div>
  );
}

export default MiniCard;
