const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);


// clima.getClima(35.886667, -5.3)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {


    try {
        const obtenerLugar = await lugar.getLugarLatLng(direccion);
        const obtenerClima = await clima.getClima(obtenerLugar.lat, obtenerLugar.lng);
        return `El clima de ${obtenerLugar.dir} es de ${obtenerClima}`;
    } catch {
        return `No se pudo determinar el clima de ${direccion.dir}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);