let ex1 = [3, -1, 6, -5, -3]
let ex2 = [5, 2, -2]
let ex3 = [3, -3, 1]
let ex4 = [-5, 1, -4, -1]

function cercanoACero(arre) {


    let gallito = arre[0]
    let empate = false
    arre.forEach(elem => {


        var positivo = Math.abs(elem)
        if (Math.abs(gallito) > positivo) {
            empate = false
            gallito = elem
        } else if (gallito === (-1 * elem)) {
            empate = true
        }
    })
    if (empate) return 'Empate'
    else return gallito
}

console.log(ex1, cercanoACero(ex1))
console.log(ex2, cercanoACero(ex2))
console.log(ex3, cercanoACero(ex3))
console.log(ex4, cercanoACero(ex4))