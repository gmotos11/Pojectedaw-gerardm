const opts={
    /** */
    nom:{
        alias:"n"
    },
    hores:{
        alias:"h"
    }, 
    /**/
        base:{
        alias:'b'
    },
    limit:{
        alias:'l',
        default:10,
    },

};

const argv=require('yargs')
            .command('llistar','Imprimeix en consola la taula de multiplicar',opts)
            .command('crear','Genera un fitxer amb la taula de multiplicar',opts)
            .command('registrar','Genera un fitxer amb la taula de multiplicar',opts)
            .help().argv;

module.exports={
    argv,
}