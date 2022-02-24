//A file that contains most of the logic for fetching the data from each API endpoint.


const { fetchMyIP } = require("./iss");


fetchMyIP((error, ip) => {
  if (error) {
    console.log("Couldn't find the IP. ", error);
    return;

  }
  console.log("Found your IP: ", ip)
  

});