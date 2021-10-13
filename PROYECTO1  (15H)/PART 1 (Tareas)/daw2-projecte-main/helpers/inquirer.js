const inquirer = require("inquirer");
require("colors");

const preguntes = [
  {
    type: "list",
    name: "opcio",
    message: "Què vols fer?",
    choices: [
      {
        value: "1",
        name: `${"1 ".green} Crear Tarea`,
      },
      {
        value: "2",
        name: `${"2 ".green} Listar Tarea`,
      },
      {
        value: "3",
        name: `${"3 ".green} Listar tareas completadas`,
      },

      {
        value: "7",
        name: `${"4 ".green} Listar tareas no completadas`,
      },

      {
        value: "4",
        name: `${"5 ".green} Completar tareas`,
      },
      {
        value: "5",
        name: `${"6 ".green} Eliminar Tarea`,
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
  console.log("========================".cyan);
  console.log("   Secciona una opció".yellow);
  console.log("========================\n".cyan);

  const { opcio } = await inquirer.prompt(preguntes);

  return opcio; // retorno un valor entre 0 i 5
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
};

const novaTasca = async (message) => {
  const question = [
    {
      type: "input",
      name: "nom",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Si us plau, introdueix un nom";
        }
        return true;
      },
    },
  ];

  const { nom } = await inquirer.prompt(question);
  return nom;
};

const tascaSelect = async (alumnes = []) => {
  const choices = alumnes.map((alumne, i) => {
    const idx = `${i + 1}.`.green;
    return {
      value: alumne.id,
      name: `${idx} ${alumne.nom}`,
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


const opcions = async (tasques=[]) => {

  const choices = tasques.map((tasca, i) => {
    const idx = `${i + 1}.`.green;


    
    const Tas = `${tasca.CompletaOno}` > 0 ? "Completada".green : "pendent".yellow;
   return {
      value: tasca.id,
      name: `${idx} ${tasca.nom} :: `+Tas,
   };
  });
  const check=[
    {
      type:'checkbox',
      name: 'ids',
      message: 'Escull les tasques que vols completar',
      choices 
    },
  ];

  const {ids}= await inquirer.prompt(check);

  return ids;
}



/// CASO 5

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











module.exports = {
  inquirerMenu,
  pausa,
  novaTasca,
  tascaSelect,
  confirmar,
  opcions,
};
