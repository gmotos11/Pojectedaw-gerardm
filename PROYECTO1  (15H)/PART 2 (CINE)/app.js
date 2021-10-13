require("colors");

const{
    inquirerMenu,
    entrada,
    pausa,
    reservaSelect,
    confirmar,
}= require("./helpers/inquirer");

//const asientos = require("./models/reserva");

//? BD Reseras
const { guardarDB, readDB } = require("./helpers/guardar_Reserva");

const Resevas_Butacas = require("./models/reserva_butacas");



const main = async () => {
  //eleccion lo utilizaras para la eleccion de la lista para que el user ponga los datos
  let eleccion = "";
  const Api_reserva = new Resevas_Butacas();

  //? BD Resercas
  const DB_Reserva = readDB();

  if (DB_Reserva) {
    // si hi ha dades, carrégales
    Api_reserva.carregarReservasFromArray(DB_Reserva);
  }

  do {
    eleccion = await inquirerMenu();

    switch (eleccion) {
      case "1":
        const flaEntrada = await entrada("Fila Deseada 1-8");
        const butacaEntrada = await entrada("Butaca deseada 1-8");
        Api_reserva.crearReserva5(flaEntrada,butacaEntrada);
        
        
        break;

      case "2":
        Api_reserva.mostrar_sala();
        
        break;

      case "3":
        Api_reserva.recaudacio();
        
        break;

        case "4":
        
          const id2 = await reservaSelect(Api_reserva.llistatArr);
        if (id2 !== "0") {
          const ok = await confirmar("Confirmar");
          //console.log(id2);
           if( ok ) {
          Api_reserva.eliminar_reserva(id2);
          console.log('Reserva eliminada!');
        };
        }  
          
          break;
          case "5":
           
            
            break;
          
          
      default:
        break;
    }

    guardarDB(Api_reserva.llistatArr);

    await pausa();
  } while (eleccion !== "0");
};
main();