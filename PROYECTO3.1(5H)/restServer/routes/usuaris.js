const { Router } = require("express");
const { response, request } = require("express");

const { check, validationResult } = require("express-validator");

const { usuarisGet, usuarisPost, usuarisDelete, usuarisPUT } = require("../controllers/usuaris");
const { clientsGet, clientsPost, clientsDelete, clientsPUT } = require("../controllers/clients");
const { serveisGet } = require("../controllers/serveis");

const { emailExisteix } = require("../helpers/db-validators");
const User = require("../models/usuari");
const router = Router();

const validarCamps = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }
  next();
};

router.get("/", (req = request, res = response) => {
  res.send("Accés denegat...");
});


//==USUARIS==

router.get("/usuaris", usuarisGet);
router.post(
  "/usuaris",
  [
    check("correu", "El correu no és vàlid").isEmail(),
    check("correu").custom(emailExisteix),
    check("nom", "El nom és obligatori").not().isEmpty(),
    check("password", "El password ha de tenir més de 6 caràcters").isLength({
      min: 6,
    }),

    validarCamps,
  ],
  usuarisPost
);



router.delete("/usuaris", usuarisDelete);
router.put("/usuaris", usuarisPUT);



//==CLIENTS==

router.get("/clients", clientsGet);

router.post(
  "/clients",
  [
    check("correu", "El correu no és vàlid").isEmail(),
    check("correu").custom(emailExisteix),
    check("nom", "El nom és obligatori").not(). isEmpty(),
    check("password", "El password ha de tenir més de 6 caràcters").isLength({
      min: 6,
    }),
    check("codi_postal", "Codi postal ha de tenir 5 caracteres").isLength({
      min: 5, max:5,
    }),

    validarCamps,
  ],
  clientsPost
);

router.delete("/clients", clientsDelete);

router.put("/clients", clientsPUT);




//==Serveis==

router.get("/serveis", serveisGet);


// router.put /:id //update d'un determinat usuari
// router.delete /:id //eliminar un usuari determinat

module.exports = router;
