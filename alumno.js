let alumnos = [{//se declaran la estructura alumnos 
        matricula: 123,
        nombre: "Juan",
        licenciatura: "Ingenieria en Sistemas",
        grupo: 4953
    }, {
        matriula: 456,
        nombe: "Berenice",
        licenciatura: "Ingenieria en Sistemas",
        grupo: 4956
    }, {
        matricula: 789,
        nombre: 'Pedro',
        licenciatura: "Ingenieria en Sistemas",
        grupo: 4946
    }]
    
    let getAlumno = (matricula) => {//se declara la funcion matricula
        return new Promise((resolve, reject) => {//se hace una promise y se hace la consulta
        let alumnoDB = alumnos.find(alumno => alumno.matricula === matricula)
        if (!alumnoDB) {
            reject(`No existe el matricula= ${matricula} del alumno dentro de la base datos`);
        } else {
            resolve(alumnoDB);
        }
    });
}
    
getAlumno(123).then(res => {///condicion del error
    console.log(res); 
}).catch(error => {
    console.log(error);
});