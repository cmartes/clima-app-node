const axios = require("axios");

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=3476d486a50d10673236528d46413a11&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}