//!requiere las dependencias
const inquirer = require("inquirer");
const Reserva = require("../models/reserva");
require("colors");

//*Creamos las opciones una Array []
const Opciones = [
  {
    type: "list",
    name: "opcio",
    message: "Què vols fer?",
    choices: [
      {
        value: "1",
        name: `${"1".green} Crear Reserva`,
      },
      {
        value: "2",
        name: `${"2".green} Mostrar Sala`,
      },
      {
        value: "3",
        name: `${"3".green} Mostrar Recaudació`,
      },
      {
        value: "4",
        name: `${"4".green} Eliminar Reserva`,
      },
      {
        value: "0",
        name: `${"0 ".green} Sortir`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("========".cyan+"CINE MAX".yellow+"========".cyan);
  console.log("   Secciona una opció".white);
  console.log("========================\n".cyan);

  const { opcio } = await inquirer.prompt(Opciones);

  return opcio; // retorno un valor entre 0 i 2
};

const pausa = async () => {
  const question = [
    {
      type: "input",
      name: "enter",
      message: `Presiona ${"enter".yellow} per a continuar`,
    },
  ];
  console.log("\n");
  await inquirer.prompt(question);
  //espera al question
};



const reservaSelect = async (reserves = []) => {
  const choices = reserves.map((reserva, i) => {
    const idx = `${i + 1}.`.green;
    return {
      value: reserva.id, 
    //  value: reserva.fila,
     // value: reserva.butaca,
    name: `${("Reserva-").green} ${idx} Fila:${(reserva.fila).yellow} Butaca:${(reserva.butaca).yellow}`,
     // console.log(`${("Reserva-" + idx).green} Fila: ${(fila).yellow}   Butaca:${(butaca).yellow}`);
    };
  });




choices.unshift({
  value: "0",
  name: "0. ".green + "Cancel·lar",
});

const pregunta = [
  {
    type: "list",
    name: "id",
    message: "Selecciona una tasca",
    choices,
  },
];

const { id } = await inquirer.prompt(pregunta);
return id;
};


const confirmar = async (message) => {
  const question = [
    {
      type: "confirm",
      name: "ok",
      message,
    },
  ];

  const { ok } = await inquirer.prompt(question);
  return ok;
};


//*esto solo para decir que si esta vacio ponga algo
const entrada = async (message) => {
  const question = [
    {
      type: "input",
      name: "reserva",
      message,
      validate(value) {
        if (value <= 0|| value>=9 || value=="") {
          return "Error, procura que la fila y butaca introducidas sean valores entre 1 y 9";
        };

        


        return true;
      },
    },
  ];

  const { reserva } = await inquirer.prompt(question);
  return reserva;
};


module.exports = {
  inquirerMenu,
  entrada,
  pausa,
  reservaSelect,
  confirmar,
};
