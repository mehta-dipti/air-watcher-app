import { getApiKey } from "./apiKey";
export async function getCountries () {
  let apiKey = getApiKey();
  return fetch(`http://api.airvisual.com/v2/countries?key=${apiKey}`);
  // return fetch('http://localhost:3001/countries')
}