const { Schema, model } = require("mongoose");

const ServeiSchema = Schema({
  nom: {
    type: String,
    required: [true, "El nom és obligatori"],
  },
  descripcio: {
    type: String,
    required: [true, "La descripció és obligatoria"],
    unique: true,
  },
  preu: {
    type: String,
    required: [true, "El preu es obligatori"],
  },
  disponible: {
    type: Boolean,
    default: true,
  },
  tipus_cacao: {
    type: String,
    required: [true, "El tipús de cacao es obligatori"],
  },

});


module.exports = model("Servei", ServeiSchema);