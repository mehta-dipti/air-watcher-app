import React, { useEffect, useState } from "react";
import { getApiKey } from "../../services/apiKey";
import { getCityDataService } from "../../services/getCityData";
import { WeatherCard } from "../card/WeatherCard";
import CitySelector from "../citySelector/CitySelector";
import MetroData from "../metroData/MetroData";
import Header from "../header/Header";
import Footer from "../footer/Footer";
// import NewsApp from "../newsApp/NewsApp";
import DashboardNews from "../dashboardNews/DashboardNews";

function Dashboard() {
  let [cityData, setCityData] = useState([]);
  let apiKey = getApiKey();

  const getCityData = (country, state, city) => {
    let urlToGetCityData = `http://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=${apiKey}`;
    getCityDataService(urlToGetCityData)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          alert("Unable to fetch data at the moment \n Please try again later");
        }
      })
      .then((jsonData) => {
        // console.log("jsonData for city : ", jsonData);
        if (jsonData?.status === "success") {
          console.log(jsonData.data);
          setCityData(jsonData.data);
        } else {
          alert(
            "Sorry! The selected city has no active stations at the moment \n Please try again later"
          );
        }
      });
  };

  const showCardOrNot = () => {
    if (cityData.length !== 0) {
      return <WeatherCard cityDataProps={cityData} />;
    } else {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="text-center"
        >
          <div className="m-auto component-title container">
            Result will be displayed here
          </div>
        </div>
      );
    }
  };

  const addCityToFav = (city, cityUrl) => {
    console.log("Adding city to fav : ", city);
  };

  return (
    <div className="container-fluid">
      {/* body */}
      <div className="row d-flex flex-row">
        {/* CitySelector component  */}
        <div className="col-md-4">
          {/* CitySelector component here */}
          <CitySelector searchCityData={getCityData} />
        </div>

        {/* For result and famous cities cards */}
        <div className="col-md-8">
          <div className="container ">
            <div
              className="row"
              id="result-container"
              style={{ height: "100%" }}
            >
              {/* Result here */}
              {showCardOrNot()}
            </div>
            <div className="row" id="metroData">
              {/* Metro data here */}
              <div className="container mt-5 text-center">
                <MetroData />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* News component */}
      <div className="row py-5">
        <div className="container px-0 pt-2">
          <DashboardNews />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

// 3 vars: country, state, city
