const axios = require('axios');

const getClima = async(lat, lng) => {



    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=60d36f818501ac1bce485b82bf44f406&units=metric`)


    return resp.data.main.temp;
}


module.exports = {
    getClima
}