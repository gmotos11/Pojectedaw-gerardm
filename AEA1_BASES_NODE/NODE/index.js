/*
Versions en Node:
3 camps 1.2.3 = Major.minor.patch
Nmp express - npm colors
npm install colors
npm rm colors

*/

require("colors");

/*
const{ crearFitxer } = require('./helpers/multiplica');


const base = 3;
crearFitxer(base);
*/
const{ crearAlumne } = require('./helpers/hores');
console.log(process.argv);

let nom = process.argv[2];
nom = nom.split('='); // sortida es una array;

let hores = process.argv[3];
hores = hores.split("=")[1];

//console.log(nom);
//console.log(alumne);
crearAlumne(nom, hores);



    