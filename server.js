const axios = require("axios");


const requestLondon = axios.get(
  "https://api.openweathermap.org/data/2.5/weather?q=London&appid=c4ee34ee47d5f99aaea1ccf3bc6ffd2d"
);
const requestTunisia = axios.get(
  "https://api.openweathermap.org/data/2.5/weather?q=Tunisia&appid=c4ee34ee47d5f99aaea1ccf3bc6ffd2d"
);
const requestGermany = axios.get(
  "https://api.openweathermap.org/data/2.5/weather?q=Germany&appid=c4ee34ee47d5f99aaea1ccf3bc6ffd2d"
);

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
