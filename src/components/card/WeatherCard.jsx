import React from "react";
import "./WeatherCard.css";
export const WeatherCard = (props) => {
  const city = props.cityDataProps?.city;
  const state = props.cityDataProps?.state;
  const country = props.cityDataProps?.country;
  const location = `${city} (${state}), ${country}`;
  const num = props.windDirection;
  const cel = props?.cityDataProps?.current?.weather?.tp;
  const iconName = props?.cityDataProps?.current?.weather?.ic
    ? `${props?.cityDataProps?.current?.weather?.ic}.png`
    : "mask-icon.png";
  const windSpeedInKMPH =
    Math.round(
      (props.cityDataProps?.current?.weather?.ws * 3.6 + Number.EPSILON) * 100
    ) / 100;

  let date = new Date();
  let time = `${date.getHours()}:${date.getMinutes()}`;
  date = `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`;
  // console.log(date);

  console.log(props);
  function direction(num) {
    var val = Math.round((num / 45) % 8);
    var arr = [
      "↑ N",
      ":arrow_upper_right: NE",
      "→ E",
      ":arrow_lower_right: SE",
      "↓ S",
      ":arrow_lower_left: SW",
      "&larr;  W",
      ":arrow_upper_left: NW",
    ];
    // console.log(arr[(val%16)]);
    return arr[val % 16];
  }
  function celToFar(cel) {
    var val = (cel * 9) / 5 + 32;
    // console.log(val);
    return val;
  }
  // function icon(i) {
  //   if (i === "01d") {
  //     return "../../public/01d.png";
  //   } else {
  //     return "../../public/01d.png";
  //   }
  // }
  // console.log(direction(20));

  if (props.length !== undefined) {
    return <></>;
  } else {
    return (
      <div className="main container">
        <div className="row">
          <div className="col-sm-12">
            <div className="col-sm-12 col-md-10 weather-panel">
              <div className="row mt-3">
                <div className="col-sm-2 ">
                  <i
                    className="fas fa-smog mr-auto  "
                    style={{ color: "white", fontSize: "25px" }}
                  ></i>{" "}
                  {/* <img
                    src="mask-icon.png"
                    alt="icon"
                    style={{ height: "50px", width: "auto" }}
                  /> */}
                </div>
                <i
                  className="far fa-star card-fav-button ml-auto mr-5"
                  title="Add to Fav"
                ></i>
              </div>
              <div className="row mb-5 pt-3">
                <div className="col-sm-5 ">
                  <h2>
                    {/* {city}
                    <br />
                    {state} */}
                    {location}
                    <br />
                    <small>
                      {date} - {time} (GMT)
                    </small>
                  </h2>
                  <p className="h3">
                    {/* <i className="mi mi-fw mi-lg mi-rain-heavy">
                      <img
                        src={iconName}
                        alt="icon"
                        className="ml-auto"
                        style={{ height: "50px", width: "auto" }}
                      />
                    </i> */}
                  </p>
                </div>
                <div className="col-sm-5 text-center border mx-5 p-0 mt-4">
                  <div className="h1 aqi-container m-0 pb-3">
                    <small>
                      <u>
                        <b>Air Quality Index</b>
                      </u>
                    </small>
                    <img
                      src="mask-icon.png"
                      alt="icon"
                      className="aqi-icon"
                      style={{
                        height: "50px",
                        width: "auto",
                      }}
                    />
                    {/* <br />
                    <br /> */}
                    <div className="mt-5">
                      <span className="mt-2">
                        {props.cityDataProps?.current?.pollution.aqius}{" "}
                        <small>(US)</small>
                      </span>
                    </div>
                    {/* <br />
                    <br /> */}
                    <div className="mt-3">
                      <span>
                        {props.cityDataProps?.current?.pollution.aqicn}{" "}
                        <small>(China)</small>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 pt-5">
                  <div className="col-md-12 text-center">
                    <img
                      src={iconName}
                      alt="icon"
                      className="ml-auto"
                      style={{
                        height: "90px",
                        width: "auto",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* <div className="col-md-12">
                <img
                  src={iconName}
                  alt="icon"
                  className="ml-auto"
                  style={{
                    height: "80px",
                    width: "auto",
                  }}
                />
              </div> */}

              <div className="col-sm-12 p-3">
                <ul className="list-inline row forecast ">
                  {/* <li className="col-lg-3 text-center pb-3">
                    
                  </li> */}
                  <li
                    className="col-lg-3  text-center pb-3 my-1"
                    style={{ height: "70px" }}
                  >
                    <h3 className="h5">Temperature</h3>
                    <p>
                      <i className="mi mi-fw mi-2x mi-cloud-sun"></i>
                      {props.cityDataProps?.current?.weather?.tp}°C /
                      {celToFar(cel)}°F
                    </p>
                  </li>
                  <li
                    className="col-lg-3 text-center pb-3 my-1"
                    style={{ height: "70px" }}
                  >
                    <h3 className="h5">Humidity</h3>
                    <p>
                      <i className="mi mi-fw mi-2x mi-sun"></i>
                      {props.cityDataProps?.current?.weather?.hu}%
                    </p>
                  </li>
                  <li
                    className=" col-lg-3 text-center pb-3 my-1"
                    style={{ height: "70px" }}
                  >
                    <h3 className="h5 mr-auto">Wind Speed</h3>
                    <p>
                      <i className="mi mi-fw mi-2x mi-cloud-sun"></i>
                      {windSpeedInKMPH} Km/h
                    </p>
                  </li>
                  <li
                    className="col-lg-3 text-center pb-3 my-1"
                    style={{ height: "70px" }}
                  >
                    <h3 className="h5 ">Wind Direction</h3>
                    <p style={{ fontSize: "1.5em", fontWeight: "bolder" }}>
                      {direction(props.cityDataProps?.current?.weather?.wd)}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
