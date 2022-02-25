//A file that contains most of the logic for fetching the data from each API endpoint.


const { nextISSTimesForMyLocation } = require("./iss");

//This code was temporary to test out fetchMyIP function
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("Couldn't find the IP.", error);
//     return;
//   }
//   console.log("Found your IP: ", ip)
// });

// fetchCoordsByIP("24.224.233.49", (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!", error)
//     return;
//   }
//   console.log("It worked! Returned coordinates:", coordinates)
// });

// const testCoords = { latitude: '49.27670', longitude: '-123.13000' }

// fetchISSFlyOverTimes(testCoords, (error, passTimes) => {
//   if (error) {
//     console.log("It didn't work!", error)
//     return;
//   }
//   console.log("It worked!, it'll be overhead at", passTimes)
// });

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    console.log("It didn't work!", error)
    return;
  }
  console.log(passTimes)
  for (times of passTimes) {
    const datetime = new Date(0)
    datetime.setUTCSeconds(times.risetime);
    const duration = times.duration
    console.log(`Next pass at ${datetime} for ${duration} seconds!`)
  }
});