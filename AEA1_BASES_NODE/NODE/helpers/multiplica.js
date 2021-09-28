const fs = require('fs');

/*
const multip = (a1, a2) => {
return a1 * a2;
}
console.log(multip); */

const crearFitxer = (base = 5) => {

    console.log('===========');
    console.log('   Taula del'+base);
    console.log('===========');

    let sortida = "";

    for(let i = 0; i <=10; i++){
        sortida += `${base} * ${i} = ${base * i}\n `;
     }
    
     fs.writeFileSync(`taula ${base}.txt`,sortida);

}

module.exports = {
    crearFitxer,
}