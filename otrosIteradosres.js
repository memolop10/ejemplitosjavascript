//objeto

let automovil ={ 
    modelo:'Camaro',
    anio: 2018,
    motor: 6.0,
    marca:'Chevrolet'
}


// for(info of Object.values(automovil)){
//     console.log(info)
// }


Object.values(automovil).forEach(element => {
    console.log(element)
});