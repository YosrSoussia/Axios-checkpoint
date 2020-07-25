const axios = require("axios");
const http = require("http");

const requestLondon = axios.get(
  "https://api.openweathermap.org/data/2.5/weather?q=London&appid=c4ee34ee47d5f99aaea1ccf3bc6ffd2d"
);
const requestTunisia = axios.get(
  "https://api.openweathermap.org/data/2.5/weather?q=Tunisia&appid=c4ee34ee47d5f99aaea1ccf3bc6ffd2d"
);
const requestGermany = axios.get(
  "https://api.openweathermap.org/data/2.5/weather?q=Germany&appid=c4ee34ee47d5f99aaea1ccf3bc6ffd2d"
);
/*const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');}*/

axios
  .all([requestLondon, requestTunisia, requestGermany])
  .then(
    axios.spread((London, Tunisia, Germany) => {
      console.log(London.data);
      console.log(Tunisia.data);
      console.log(Germany.data);
    })
  )
  .catch((err) => console.error(err));

/*server.listen(8000, () => {
  console.log(`Server running at port8000`);
});*/
