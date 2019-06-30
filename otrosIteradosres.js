//objeto

let automovil ={ 
    modelo:'Camaro',
    anio: 2018,
    motor: 6.0,
    marca:'Chevrolet'
}


for(key of Object.values(automovil)){
    console.log(key)
}


Object.values(automovil).forEach(element => {
    console.log(element)
});