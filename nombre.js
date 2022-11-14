let nombre = (nom, callback) => { //se declara la fucion callback y manda a llamar a la variable nombre 
    var miNombre = "Nombre: " + nom;
    callback(miNombre); 
  }
  
  let logNombre = (nom) => {//se declara la variable nombre
    console.log(nom);
  }

nombre("Dulce Jazmin Muñoz Valladares", logNombre); //Se imprime

