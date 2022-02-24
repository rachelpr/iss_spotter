//A file to require and run our main fetch function

const request = require("request");
/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const fetchMyIP = function (callback) {

  url = "https://api.ipify.org/?format=json"
  request(url, (error, response, body) => {
    const ip = JSON.parse(body).ip;
    console.log(ip)
    
    
  });
};

module.exports = { fetchMyIP }