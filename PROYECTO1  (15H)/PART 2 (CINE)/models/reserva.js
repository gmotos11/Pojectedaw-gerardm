const {v4: uuidv4} = require('uuid');

class Reserva{
    id = "";
    fila = "";
    butaca = "";

    constructor(fila, butaca){
        this.id = uuidv4();
        this.fila = fila;
        this.butaca = butaca;
    }
}

module.exports = Reserva;
//Lo estamos exportando al asientos.js