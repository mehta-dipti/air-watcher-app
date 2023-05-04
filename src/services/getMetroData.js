import {getCityDataService} from './getCityData';

export function getMetroData() {
  let chennaiUrl = 'http://api.airvisual.com/v2/city?city=Chennai&state=Tamil%20Nadu&country=India&key=62b57d3a-0edb-4d78-90d2-60741f22715e';
  let delhiUrl = 'http://api.airvisual.com/v2/city?city=Delhi&state=Delhi&country=India&key=62b57d3a-0edb-4d78-90d2-60741f22715e';
  let kolkataUrl = 'http://api.airvisual.com/v2/city?city=Kolkata&state=West%20Bengal&country=India&key=62b57d3a-0edb-4d78-90d2-60741f22715e';
  let mumbaiUrl = 'http://api.airvisual.com/v2/city?city=Mumbai&state=Maharashtra&country=India&key=62b57d3a-0edb-4d78-90d2-60741f22715e';
  
  let chennaiData = getCityDataService(chennaiUrl)
                      .then( (res) => {
                        if (res.ok) {
                          return res.json();
                        }
                      })
                      .then( jsonData => {
                        if (jsonData.status === "success") {
                          return jsonData.data;
                        }
                      })
                      .catch(e => alert("Cannot fetch data at the moment \n Please try again later"));

  let delhiData = getCityDataService(delhiUrl)
                      .then( (res) => {
                        if (res.ok) {
                          return res.json();
                        }
                      })
                      .then( jsonData => {
                        if (jsonData.status === "success") {
                          return jsonData.data;
                        }
                      })
                      .catch(e => alert("Cannot fetch data at the moment \n Please try again later"))                

  let kolkataData = getCityDataService(kolkataUrl)
                      .then( (res) => {
                        if (res.ok) {
                          return res.json();
                        }
                      })
                      .then( jsonData => {
                        if (jsonData.status === "success") {
                          return jsonData.data;
                        }
                      })
                      .catch(e => alert("Cannot fetch data at the moment \n Please try again later"))

  let mumbaiData = getCityDataService(mumbaiUrl)
                      .then( (res) => {
                        if (res.ok) {
                          return res.json();
                        }
                      })
                      .then( jsonData => {
                        if (jsonData.status === "success") {
                          return jsonData.data;
                        }
                      })
                      .catch(e => alert("Cannot fetch data at the moment \n Please try again later"))

  return [chennaiData, delhiData, kolkataData, mumbaiData];

                    
}