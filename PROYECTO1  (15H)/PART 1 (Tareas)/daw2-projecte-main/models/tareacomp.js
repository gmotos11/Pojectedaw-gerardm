const Tarea = require("./tarea");

/**
 * _llista :
 *  { uuid-234235324-234234523: {id: uuid-234235324-234234523, nom: 'pepito', hores: 10 }}
 */

class TareaComp {
  _llista = {
    abc: 123,
  };

  get llistatArr() {
    const llistat = [];
    Object.keys(this._llista).forEach((key) => {
      const tasca = this._llista[key];
      llistat.push(tasca);
    });

    return llistat;
  }

  

  constructor() {
    this._llista = {};
  }

  crearTasca(nom = "", Nocompl) {
    const tasca = new Tarea(nom, Nocompl);
    this._llista[tasca.id] = tasca;
  }

  carregarAlumnesFromArray(tasques = []) {
    tasques.forEach((tasca) => {
      this._llista[tasca.id] = tasca;
    });
  }

  llistarTasques() {
    console.log(); // sóc un salt de línia

    let conta = 0;
    this.llistatArr.forEach((tasca) => {
      const { nom, CompletaOno } = tasca;
      conta += 1;
      const Tas = `${tasca.CompletaOno}` > 0 ? "Completada".green : "Pendiente".yellow;
      console.log(`${(conta + ".").green} ${nom} :: ${Tas}`);
    });
  }


//Tac
  llistarTascasCOMPLETAS() {
    console.log(); // sóc un salt de línia
    let conta = 0;
    this.llistatArr.forEach((tasca) => {
      const { nom, CompletaOno } = tasca;
      conta += 1;
      if (CompletaOno==1){
      console.log(`${(conta + ".").green} ${nom}`);
      }
    });
  }


  llistarTascasNoCompletades(){
    console.log(); // sóc un salt de línia
    let conta = 0;
    this.llistatArr.forEach((tasca) => {
      const { nom, CompletaOno } = tasca;
      conta += 1;
      if (CompletaOno==0){
      console.log(`${(conta + ".").green} ${nom}`);
      }
    });

  }

  async eliminarTasca(id) {
    delete this._llista[id];
  }



async TareaComplet(id) {
    const tasca = this._llista[id];
    tasca.CompletaOno = 1;
    return tasca.nom;
}


async Checkboxmult(id){
/*
    console.log(); // sóc un salt de línia

    const tasca = this._llista[id];
    //let conta = 0;
    
    
    this.llistatArr.forEach((tasca) => {

    //  conta += 1;
      //const tasca = this._llista[id];
      if (tasca.CompletaOno==0){
      tasca.CompletaOno = 1;
      
    }
    else if(tasca.CompletaOno==1){
      tasca.CompletaOno= 0;
    }
    });

*/
    for (let i = 0; i < id.length; i++) {
      const tasca = this._llista[id[i]];
      if (tasca.CompletaOno!=0){

        tasca.CompletaOno=0;
        
      }else{
      tasca.CompletaOno=1;
      }

/*
 
    const tasca = this._llista[id];
    if (tasca.CompletaOno==0){
    tasca.CompletaOno = 1;
    
  }
  else if(tasca.CompletaOno==1){
    tasca.CompletaOno= 0;
  }

 */
  
}
}
}

module.exports = TareaComp;
