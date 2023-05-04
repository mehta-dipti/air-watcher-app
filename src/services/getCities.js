import { getApiKey } from "./apiKey";

export function getCities(country, state) { 
  country = country.replace(" ", "%20");
  state = state.replace(" ", "%20");
  let apiKey = getApiKey();
  let urlToGetCities = `http://api.airvisual.com/v2/cities?state=${state}&country=${country}&key=${apiKey}`
  return fetch(urlToGetCities);
}