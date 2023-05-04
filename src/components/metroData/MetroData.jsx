import React, { useEffect, useState } from "react";
import { getCityDataService } from "../../services/getCityData";
import MiniCard from "../mini-card/MiniCard";
import { getApiKey } from "../../services/apiKey";

function MetroData(props) {
  let apiKey = getApiKey();
  let chennaiUrl = `http://api.airvisual.com/v2/city?city=Chennai&state=Tamil%20Nadu&country=India&key=${apiKey}`;
  let delhiUrl = `http://api.airvisual.com/v2/city?city=Delhi&state=Delhi&country=India&key=${apiKey}`;
  let kolkataUrl = `http://api.airvisual.com/v2/city?city=Kolkata&state=West%20Bengal&country=India&key=${apiKey}`;
  let mumbaiUrl = `http://api.airvisual.com/v2/city?city=Mumbai&state=Maharashtra&country=India&key=${apiKey}`;

  const [metroCities, setMetroCities] = useState([]);
  const [chennaiData, setChennaiData] = useState([]);
  const [delhiData, setDelhiData] = useState([]);
  const [kolkataData, setKolkataData] = useState([]);
  const [mumbaiData, setMumbaiData] = useState([]);
  let keyNumber = 0;

  useEffect(() => {
    getCityDataService(chennaiUrl)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonData) => {
        if (jsonData.status === "success") {
          setChennaiData(jsonData.data);
        } else {
          alert("Chennai data status unsuccessful");
        }
      })
      .catch((e) => console.log("Error in fetching Chennai data!"));

    // setMetroCities([chennaiData, delhiData, kolkataData, mumbaiData]);
    // console.log(metroCities);
  }, []);

  useEffect(() => {
    getCityDataService(delhiUrl)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonData) => {
        if (jsonData.status === "success") {
          setDelhiData(jsonData.data);
        } else {
          alert("Delhi data status unsuccessful");
        }
      })
      .catch((e) => console.log("Error in fetching Delhi data!"));
  }, []);

  useEffect(() => {
    getCityDataService(kolkataUrl)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonData) => {
        if (jsonData.status === "success") {
          setKolkataData(jsonData.data);
        } else {
          alert("Kolkata data status unsuccessful");
        }
      })
      .catch((e) => console.log("Error in fetching Kolkata data!"));
  }, []);

  useEffect(() => {
    getCityDataService(mumbaiUrl)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonData) => {
        if (jsonData.status === "success") {
          setMumbaiData(jsonData.data);
        } else {
          alert("Mumbai data status unsuccessful");
        }
      })
      .catch((e) => console.log("Error in fetching Mumbai data!"));
  }, []);

  useEffect(() => {
    setMetroCities([...metroCities, chennaiData]);
  }, [chennaiData]);

  useEffect(() => {
    setMetroCities([...metroCities, delhiData]);
  }, [delhiData]);

  useEffect(() => {
    setMetroCities([...metroCities, kolkataData]);
  }, [kolkataData]);

  useEffect(() => {
    setMetroCities([...metroCities, mumbaiData]);
  }, [mumbaiData]);

  if (
    chennaiData.length !== 0 &&
    delhiData.length !== 0 &&
    kolkataData.length !== 0 &&
    mumbaiData.length !== 0
  ) {
    return (
      <div className="row my-5 text-center">
        {metroCities?.map((metro) => {
          console.log("metro : ", metro);
          keyNumber += 1;
          return <MiniCard cityData={metro} key={`key${keyNumber}`} />;
        })}
      </div>
    );
  } else {
    return <></>;
  }
}

export default MetroData;
