import { getApiKey } from "./apiKey";
export function getStates (country) {
  country = country.replace(" ", "%20");
  let apiKey = getApiKey();
  let urlToGetStates = `http://api.airvisual.com/v2/states?country=${country}&key=${apiKey}`
  return fetch(urlToGetStates);
}