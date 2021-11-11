const { response, request } = require("express");
const bcryptjs = require("bcryptjs");

const Client = require("../models/client");

//==GET==

const clientsGet = async (req = request, res = response) => {
  const clients = await Client.find();
  res.json({
    clients,
  });
};

//==POST==

const clientsPost = async (req, res = response) => {
  const { nom, correu, password, telefon, codi_postal, adreca, estat, google } = req.body;
  const client = new Client({
    nom,
    correu,
    password,
    telefon,
    codi_postal,
    adreca,
    estat,
    google,
  });


  // Encriptar passwd
  const salt = bcryptjs.genSaltSync();
  client.password = bcryptjs.hashSync(password, salt);

  await client.save();

  res.json({
    client,
  });
};


//==DELETE==


const clientsDelete = async (req = request, res = response) => {
  const { _id} = req.body;
  Client.deleteOne({_id}, (err) => {
    if (err) {
      return res.status(400).json({
        ok: "Error al eliminar el client amb id " + `${_id}`,
        err,
      });
    };

    res.json({
      _id: `${_id}`+ " Eliminat",
    });
  });
};

//==PUT==

const clientsPUT= async (req = request, res = response) => {
  const { _id,nom, correu, password, telefon, codi_postal, adreca, estat, google } = req.body;

  const filter = {_id: { _id}};

  const update = { 
    nom: `${nom}`,
    correu: `${correu}`,
    password: `${password}`,
    telefon: `${telefon}`,
    codi_postal: `${codi_postal}`,
    adreca: `${adreca}`,
    estat: `${estat}`,
    google: `${google}`
  };
  
  Client.findOneAndUpdate(filter, update,  (err) => {
    if (err) {
      return res.status(400).json({
        ok: "Hi ha hagut un error",
        err,
      });
    };
   
  });
  const clients = await Client.find({_id: '618d5f37ef7fa88a1db1a288'});
  res.json({
    //ok: "L'usuari amb id: " + `${_id}` +"Ha cambiat el nom a " +`${nom}`,
    clients
  });
};

module.exports = {
  clientsGet,
  clientsPost,
  clientsDelete,
  clientsPUT
};