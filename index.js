//A file that contains most of the logic for fetching the data from each API endpoint.


const { nextISSTimesForMyLocation } = require("./iss");

/** 
 * Input: 
 *   Array of data objects defining the next fly-overs of the ISS.
 *   [ { risetime: <number>, duration: <number> }, ... ]
 * Returns: 
 *   undefined
 * Sideffect: 
 *   Console log messages to make that data more human readable.
 *   Example output:
 *   Next pass at Mon Jun 10 2019 20:11:44 GMT-0700 (Pacific Daylight Time) for 468 seconds!
 */
nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    console.log("It didn't work!", error)
    return;
  }
  console.log(passTimes)
  for (const times of passTimes) {
    const datetime = new Date(0)
    datetime.setUTCSeconds(times.risetime);
    const duration = times.duration
    console.log(`Next pass at ${datetime} for ${duration} seconds!`)
  }
});