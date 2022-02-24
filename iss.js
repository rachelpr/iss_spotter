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
    
    // error can be set if invalid domain, user is offline, etc.
    if (error){
      callback(error,null);
      return;
    }
    
    // if non-200 status, assume server error
    if (response.statusCode !== 200){
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg),null);
      return;
    }

    // if we get here, all's well and we got the data
    const ip = JSON.parse(body).ip;
    callback(null,ip)
  });  
};

module.exports = { fetchMyIP }