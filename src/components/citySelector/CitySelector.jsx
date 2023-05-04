import React, { useEffect, useState } from "react";
import { getCountries } from "../../services/getCountries";
import "./CitySelector.css";
import { getStates } from "../../services/getStates";
import { getCities } from "../../services/getCities";
import { getApiKey } from "../../services/apiKey";

function CitySelector(props) {
  // States for dropdown :
  let [dropdownCountries, setDropdownCountries] = useState([]);
  let [dropdownStates, setDropdownStates] = useState([]);
  let [dropdownCities, setDropdownCities] = useState([]);

  // Variable to set key
  let keyNumber = 0;

  // States for selected dropdown values :
  let [country, setCountry] = useState("Select Country");
  let [state, setState] = useState("Select State");
  let [city, setCity] = useState("Select City");
  let [countryHasActiveStation, setCountryHasActiveStation] = useState(true);
  let [stateHasActiveStation, setStateHasActiveStation] = useState(true);
  // let [cityHasActiveStation, setCityHasActiveStation] = useState(true);

  useEffect(() => {
    getCountries()
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          alert("res not ok");
        }
      })
      .then((jsonData) => {
        if (jsonData.status === "success") {
          console.log(props);
          setDropdownCountries(jsonData.data);
        } else {
          alert("status unsuccessful");
        }
      })
      .catch((err) => alert("error here", err));
  }, []);

  const countrySelectHandler = (selectedCountry) => {
    setCountry(selectedCountry);
    getStates(selectedCountry)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          setCountryHasActiveStation(false);
          alert("Sorry! No active stations for the selected country");
        }
      })
      .then((jsonData) => {
        if (jsonData?.status === "success") {
          setDropdownStates(jsonData.data);
        }
      });
  };

  const stateSelectHandler = (selectedState) => {
    setState(selectedState);
    getCities(country, selectedState)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          setStateHasActiveStation(false);
          alert("Sorry! There are no active stations for selected state.");
        }
      })
      .then((jsonData) => {
        if (jsonData?.status === "success") {
          setDropdownCities(jsonData.data);
        }
      });
  };

  const citySelectHandler = (selectedCity) => {
    setCity(selectedCity);
  };

  const searchCityDataHandler = (country, state, city) => {
    if (country !== "Select Country") {
      if (countryHasActiveStation) {
        if (state !== "Select State") {
          if (stateHasActiveStation) {
            if (city !== "Select City") {
              console.log("calling props.search");
              country = country.replace(" ", "%20");
              state = state.replace(" ", "%20");
              city = city.replace(" ", "%20");
              props.searchCityData(country, state, city);
            } else {
              alert("Please select a city!");
            }
          } else {
            alert(
              "Sorry! The selected state has no active stations at this moment \n Please try again later"
            );
          }
        } else {
          alert("Please select a State!");
        }
      } else {
        alert(
          "Sorry! The selected country has no active stations at this moment \n Please try again later"
        );
      }
    } else {
      alert("Please select a country!");
    }
  };

  return (
    <div className="container city-selector-container border h-100 px-3 py-5">
      <div className="select-city-title">Select your city here</div>
      <div className="dropdown-container">
        {/* Dropdown for Countries */}
        <div className="dropdown w-100 py-3">
          <button
            className="btn btn-secondary dropdown-toggle w-100"
            type="button"
            id="countryDropdownButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {country}
          </button>
          <div
            className="dropdown-menu"
            aria-labelledby="dropdownMenuButton"
            style={{ maxHeight: "400px", width: "300px", overflowY: "auto" }}
          >
            {dropdownCountries.map((country) => {
              keyNumber += 1;
              return (
                <button
                  className="dropdown-item"
                  href="/"
                  key={keyNumber}
                  id={`country${keyNumber}`}
                  selected={false}
                  value={country.country}
                  onClick={(e) => countrySelectHandler(e.target.value)}
                >
                  {country.country}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dropdown for states */}
        <div className="dropdown w-100 py-3">
          <button
            className="btn btn-secondary dropdown-toggle w-100"
            type="button"
            id="dropdownStateMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {state}
          </button>
          <div
            className="dropdown-menu"
            aria-labelledby="dropdownMenuButton"
            style={{ maxHeight: "400px", width: "300px", overflowY: "auto" }}
          >
            {dropdownStates.map((state) => {
              keyNumber += 1;
              return (
                <button
                  className="dropdown-item dropdown-item"
                  href="/"
                  key={keyNumber}
                  id={`state${keyNumber}`}
                  selected={false}
                  value={state.state}
                  onClick={(ev) => {
                    return stateSelectHandler(ev.target.value);
                  }}
                >
                  {state.state}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dropdown for cities */}
        <div className="dropdown w-100 py-3">
          <button
            className="btn btn-secondary dropdown-toggle w-100"
            type="button"
            id="dropdownCityMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {city}
          </button>
          <div
            className="dropdown-menu"
            aria-labelledby="dropdownMenuButton"
            style={{ maxHeight: "400px", width: "300px", overflowY: "auto" }}
          >
            {dropdownCities.map((city) => {
              keyNumber += 1;
              // setKeyNumber((key) => key + 1);
              return (
                <button
                  className="dropdown-item dropdown-item"
                  href="/"
                  key={keyNumber}
                  id={`city${keyNumber}`}
                  selected={false}
                  value={city.city}
                  onClick={(e) => citySelectHandler(e.target.value)}
                >
                  {city.city}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="city-search-button-container">
        <button
          className="btn btn-success"
          onClick={() => searchCityDataHandler(country, state, city)}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default CitySelector;
