const Reserva = require("./reserva");

class Resevas_Butacas {
  _lista = {
    abc: 123,
  };

  get llistatArr() { //listar la array
    const llistat = []; //crea la array llistat 
    //object.keys devuel el array que se encuentren dentro 
    Object.keys(this._lista).forEach((key) => {
      //
      const reservas = this._lista[key];
      llistat.push(reservas);
    });

    return llistat;
  }

  constructor() {
    this._lista = {};
  }



  crearReserva5(flaEntrada = "",butacaEntrada="") {
   //console.log(flaEntrada);
   //console.log(butacaEntrada);
  
    let fi11 = []; let fi12 = []; let fi13 = []; let fi14 = []; let fi15 = []; let fi16 = []; let fi17 = []; let fi18 = [];

//Introducir

for (let but = 1; but < 9; but++) {
    fi11[but]="■ "; fi12[but]="■ "; fi13[but]="■ "; fi14[but]="■ "; fi15[but]="■ "; fi16[but]="■ "; fi17[but]="■ "; fi18[but]="■ ";
  };

  //REVISIÓ
  let auxButaca;
  let auxFila;
  for (let but = 1; but < 9; but++) {
    this.llistatArr.forEach((reservas) => {
     const { fila, butaca } = reservas;
    
    if (fila == flaEntrada && butaca == butacaEntrada ) {
    //  console.log("ERROR BUTACA");
      auxButaca=butacaEntrada;
      auxFila=flaEntrada;
      flaEntrada="";
      butacaEntrada="";
     }
   });
  }

   if (flaEntrada ==="" && butacaEntrada==="" ) {
    console.log(`LA BUTACA: ${(auxButaca + "").yellow} DE LA FILA ${(auxFila + "").yellow} NO ESTÀ DISPONIBLE JA QUE HA SIGUT RESERVADA ANTERIORMENT`);
    console.log('VUELVE A INTENTARLO O PRUEBA MÁS TARDE'.yellow)
  }else{
    const reserva = new Reserva(flaEntrada,butacaEntrada);
    this._lista[reserva.id] = reserva;

  }
   }




  crearReserva(fila2 = "", butaca = "") {

    if (fila2 ==="" && butaca==="" ) {
      console.log("ERROR BUTACA")
    }else{
      const reserva = new Reserva(fila2,butaca);
      this._lista[reserva.id] = reserva;
    }
   

  }

//-----------------------------------------------------------------------------------------

  mostrar_sala(){


   // SALA CON BUG DEL FOREACH
  /*
      for (let fi = 1; fi < 9; fi++) {

        for (let but = 1; but < 9; but++) {
    
        this.llistatArr.forEach((reservas) => {
          const { fila, butaca } = reservas;
          
          if (fi == fila && but == butaca) {
          process.stdout.write("■ ".red)
          
         }else{}
          
        });

        process.stdout.write("■ ");
        
        }
        console.log("");
      }
*/

//_---------------------------------------------------------------

//SALA BIEN ECHA, FALTA OPTIMIZAR


var fi1 = ["■ ", "■ ", "■ ", "■ ", "■ ", "■ ", "■ ", "■ "];
var fi2 = ["■ ", "■ ", "■ ", "■ ", "■ ", "■ ", "■ ", "■ "];
var fi3 = ["■ ", "■ ", "■ ", "■ ", "■ ", "■ ", "■ ", "■ "];
var fi4 = ["■ ", "■ ", "■ ", "■ ", "■ ", "■ ", "■ ", "■ "];
var fi5 = ["■ ", "■ ", "■ ", "■ ", "■ ", "■ ", "■ ", "■ "];
var fi6 = ["■ ", "■ ", "■ ", "■ ", "■ ", "■ ", "■ ", "■ "];
var fi7 = ["■ ", "■ ", "■ ", "■ ", "■ ", "■ ", "■ ", "■ "];
var fi8 = ["■ ", "■ ", "■ ", "■ ", "■ ", "■ ", "■ ", "■ "];

//Introducir

for (let but = 1; but < 9; but++) {
    fi1[but]="■ ";
    fi2[but]="■ ";
    fi3[but]="■ ";
    fi4[but]="■ ";
    fi5[but]="■ ";
    fi6[but]="■ ";
    fi7[but]="■ ";
    fi8[but]="■ ";

    
  };

  //Cambiar

  for (let but = 1; but < 9; but++) {
    this.llistatArr.forEach((reservas) => {
     const { fila, butaca } = reservas;
    
    if (fila == "1" && but == butaca) {
    fi1[but-1]="■ ".red;
   }else if (fila == "2" && but == butaca) {
    fi2[but-1]="■ ".red;
   }else if (fila == "3" && but == butaca) {
    fi3[but-1]="■ ".red;
   }else if (fila == "4" && but == butaca) {
    fi4[but-1]="■ ".red;
   }else if (fila == "5" && but == butaca) {
    fi5[but-1]="■ ".red;
   }else if (fila == "6" && but == butaca) {
    fi6[but-1]="■ ".red;
   }else if (fila == "7" && but == butaca) {
    fi7[but-1]="■ ".red;
   }else if (fila == "8" && but == butaca) {
    fi8[but-1]="■ ".red;
   }
    
  });
}

//Mostrar

console.log("----PANTALLA-----")
console.log("")

for (let fi = 0; fi < 8; fi++) {
  process.stdout.write(fi1[fi]); 

};
console.log("");
for (let fi = 0; fi < 8; fi++) {
 
  process.stdout.write(fi2[fi]); 

};
console.log("");
for (let fi = 0; fi < 8; fi++) {

  process.stdout.write(fi3[fi]);

};
console.log("");
for (let fi = 0; fi < 8; fi++) {

  process.stdout.write(fi4[fi]);

};
console.log("");
for (let fi = 0; fi < 8; fi++) {

  process.stdout.write(fi5[fi]);
};
console.log("");
for (let fi = 0; fi < 8; fi++) {

  process.stdout.write(fi6[fi]);

};
console.log("");
for (let fi = 0; fi < 8; fi++) {

  process.stdout.write(fi7[fi]);

};
console.log("");
for (let fi = 0; fi < 8; fi++) {

  process.stdout.write(fi8[fi]);
};
console.log("");
console.log("");
console.log("___________/______");

//console.log(sala);

//-----------------------------------------------------------------

 //SALA ORIGINAL TODO BLANCO
 /*
for (let fi = 1; fi < 9; fi++) {
  for (let but = 1; but < 9; but++) {
    process.stdout.write("■ ");
  }
  console.log("");
  }
  */



//-------------------------------------------------------------------
}

//-----------------------------------------------------------------------------------------


recaudacio(){
 
  //this._lista[reserva.id] = reserva;
 /* var a = Object.keys(Reserva).length; 
  console.log(a); */

    console.log(); // sóc un salt de línia

    var conta = 0;
    let precio = 10;
    this.llistatArr.forEach((reserva) => {
      conta += 1;
    });
    let numero_assientos = conta;
    //console.log(numero_assientos);
    let recaudacio = conta * precio;
    console.log(`Nº de Asientos ocupados: ${(numero_assientos + "").green} x ${(precio + "€").cyan}`);
    console.log(`Recaudació conseguida: ${(recaudacio + "€").yellow}`);

  
}

//__________________________________________________________________________________


/*
Llistar() {
  console.log(); // sóc un salt de línia

  let conta2 = 0;
  this.llistatArr.forEach((reserva) => {
    const { fila, butaca } = reserva;
    conta2 += 1;
    console.log(`${("Reserva-" + conta2).green} Fila: ${(fila).yellow}   Butaca:${(butaca).yellow}`);
  });
}
*/



async eliminar_reserva(id) {
  //id="a624a97b-56c6-4e8b-bd2b-456206f4fbc8"
  //console.log(id);
  delete this._lista[id];
}

//_----------------------------------------------------------------------------------
  carregarReservasFromArray(App_Reserva = []) {
    App_Reserva.forEach((App_Reserva) => {
      this._lista[App_Reserva.id] = App_Reserva;
      
    });
  }

  
}
module.exports = Resevas_Butacas;

