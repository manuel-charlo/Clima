const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    const encodeUrl = encodeURI(direccion);


    const instance = axios.create({
        baseURL: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${encodeUrl}`,
        headers: { 'x-rapidapi-key': '40bfeffcb7msheb936301bcc4e34p1c0691jsn3a92bdeb0646' }
    });

    const resp = await instance.get();
    if (resp.data.data.length === 0) {
        throw new Error(`No hay datos para esta ${direccion}`);
    }

    const data = resp.data.data[0];
    const dir = data.name;
    const lat = data.latitude;
    const lng = data.longitude;

    return {
        dir,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}