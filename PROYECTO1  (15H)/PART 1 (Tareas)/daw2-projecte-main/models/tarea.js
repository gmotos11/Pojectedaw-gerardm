const { v4: uuidv4 } = require("uuid");

//Alumne

class Tarea {
  id = "";
  nom = "";
  CompletaOno = 0;

  constructor(nom, hores) {
    this.id = uuidv4();
    this.nom = nom;
    this.CompletaOno = hores;
  }
}

module.exports = Tarea;
