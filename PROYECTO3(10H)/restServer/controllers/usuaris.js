const { response, request } = require("express");
const bcryptjs = require("bcryptjs");

const Usuari = require("../models/usuari");

//==GET==

const usuarisGet = async (req = request, res = response) => {
  const usuaris = await Usuari.find();
  res.json({
    usuaris,
  });
};

//==POST==

const usuarisPost = async (req, res = response) => {
  const { nom, estat, correu, password, rol, google } = req.body;
  const usuari = new Usuari({
    nom,
    estat,
    correu,
    password,
    rol,
    google,
  });

  // Encriptar passwd
  const salt = bcryptjs.genSaltSync();
  usuari.password = bcryptjs.hashSync(password, salt);

  await usuari.save();

  res.json({
    usuari,
  });
};

//==DELETE==

const usuarisDelete = async (req = request, res = response) => {
  const { _id} = req.body;
  Usuari.deleteOne({_id}, (err) => {
    if (err) {
      return res.status(400).json({
        ok: "Error al eliminar l'usuari amb id " + `${_id}`,
        err,
      });
    };

    res.json({
      _id: `${_id}`+ " Eliminat",
    });
  });
};


//==PUT==

const usuarisPUT= async (req = request, res = response) => {
  const { _id,nom,estat,correu,password,rol,google} = req.body;

  const filter = {_id: { _id}};
  const update = { 
  nom: `${nom}`,
  estat: `${estat}`,
  correu: `${correu}`,
  password: `${password}`,
  rol: `${rol}`,
  google: `${google}`
};

  Usuari.findOneAndUpdate(filter, update,  (err) => {
    
    if (err) {
      return res.status(400).json({
        ok: "Hi ha hagut un error",
        err,
      });
    };
 
    
  });

  const usuaris = await Usuari.find({_id: '`${_id}`'});
  res.json({
    usuaris
   // ok: "L'usuari amb id: " + `${_id}` +"Ha cambiat el nom a " +`${nom}`,
   });
};




module.exports = {
  usuarisGet,
  usuarisPost,
  usuarisDelete,
  usuarisPUT,
};
