require('colors');
const { rejects } = require('assert');
const fs = require('fs');
require('colors');

const crearAlumne = (nom = 'no_name',hores = 0) => {

    let sortida = "";

        sortida = `Alumne: ${nom}::Hores: ${hores}`;
        fs.writeFileSync(`${nom}.txt`, sortida);

        console.log("=================================".red);
        console.log(`Creant fitxer amb alumne ${nom} y hores registrades ${hores}`.cyan);
        console.log("=================================".red);
   

}


module.exports = {
    crearAlumne,
}