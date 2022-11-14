let aleatorio = Math.random();//se crea la variable que generara los numeros

let valueAppearances = [];//se crea un array

function random(min, max) {//funcion para generar numeros
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


function ciclofor(min, max){
    for (let step = 1; step < 100; step++) {//Se generan los 10 num
        let randomIndex = random(min, max);//El rango de numeros
        valueAppearances.push(randomIndex);//Se agregra el array
      }
}

let getNumeros = (min, max) => {//se crea la primera promesa 
    return new Promise((resolve, reject) => {
        if (min <= 0 && max >= 1001) {
            reject(`no se puede generar los numeros`);
        } else {
            resolve(ciclofor(min, max),
            console.log(valueAppearances));
            
        }
    });
}

let getSPromedio = (min, max) => {//se crea la segunda promesa
        return new Promise((resolve, reject) => {
        if (min <= 0 && max >= 1001) {
            reject(`no se puede generar el promedio`);
            } else {
                resolve(
                total = valueAppearances.reduce((a, b) => a + b, 0),
                division = total/100,
                //console.log('Total: ',total),
                //console.log('Promedio ',division)
                );
            }
        });
    }

let getPromedioF = async(min,max) => {// este es el orden de la ejecucion 
    let consulta = await getNumeros(min,max);
    let consulta2 = await getSPromedio(consulta);
    return 'Total: '+consulta2+ '\nPromedio: '+division;
}

getPromedioF(1,10).then((consulta2) => {
    console.log(consulta2);
}).catch((errores) => {
    console.log(errores);
});

