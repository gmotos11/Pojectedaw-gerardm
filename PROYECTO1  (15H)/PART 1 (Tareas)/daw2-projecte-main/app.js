require("colors");

const {
  inquirerMenu,
  pausa,
  novaTasca,
  tascaSelect,
  confirmar,
  opcions,
 
} = require("./helpers/inquirer");

const { guardarDB, readDB } = require("./helpers/guardarFitxer");

const TareaComp = require("./models/tareacomp");
const Tarea = require("./models/tarea");

const main = async () => {
  let opt = "";
  const TareaC = new TareaComp();

  const TareaCDB = readDB();

  if (TareaCDB) {
    // si hi ha dades, carrégales
    TareaC.carregarAlumnesFromArray(TareaCDB);
  }

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const nomTasca = await novaTasca("Nombre de la Tarea:");
        TareaC.crearTasca(nomTasca, 0);
        // const alumne = new Alumne("Ricard", 10);
        // console.log(alumne);
        break;

      case "2":
        TareaC.llistarTasques();
        break;

      case "3":
        TareaC.llistarTascasCOMPLETAS();
        break;

      case "4":
        /*
        const id4 = await tascaSelect(TareaC.llistatArr);
        if (id4 !== "0") {
          const ok = await confirmar("Confirmación de tarea complea?");
           if( ok ) {
          TareaC.TareaComplet(id4);
          console.log('Tarea Completada');
        };
        }  
*/
        const opCHEk = await opcions(TareaC.llistatArr);
        console.log(opCHEk);
        TareaC.Checkboxmult(opCHEk);

        break;

      case "5":

        const id2 = await tascaSelect(TareaC.llistatArr);
        if (id2 !== "0") {
          const ok = await confirmar("Confirmar");
           if( ok ) {
          TareaC.eliminarTasca(id2);
          console.log('Tasca eliminada!');
        };
        }  

        break;

        case "7":
  
  
          TareaC.llistarTascasNoCompletades();
  
          break;
  
        default:
          break;
    }

    guardarDB(TareaC.llistatArr);

    await pausa();
  } while (opt !== "0");
};

main();
