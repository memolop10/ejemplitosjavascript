let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
let otro = ["Mallard", "Hook Bill", "African", "Crested",
    "Pilgrim", "Toulouse", "Blue Swedish","Roman Tufted"];

    
    function quitaLosDeAquiNo (arr) {
        // let res = []
        // arr.forEach(elem => {
        //     if (!deAquiNo.includes(elem)) {
        //         // cl(elem)
        //         res.push(elem)
        //     }
        // })
        return arr.filter(elem => !geese.includes(elem))
    }
    
    console.log(quitaLosDeAquiNo(otro)) 


