const http = require("http");

const url = "http://zdep.malpeapp.test/json";

let index = 1;
function checkAvailability() {
  http.get(url, (res) => {
    if (res.statusCode === 200) {
      // The site is available
      console.log(index++ + ": Site is available");
    } else {
      // The site is not available
      console.error(index++ + ": Site is not available");
    }
  });
}

// Check the availability of the site every 100 milliseconds
setInterval(checkAvailability, 50);
