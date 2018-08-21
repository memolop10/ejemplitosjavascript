let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
let otro = ["Mallard", "Hook Bill", "African", "Crested",
    "Pilgrim", "Toulouse", "Blue Swedish"
];
let arrefinal = [];



   for(let i = 0 ;i < geese.length-1;i++){
       let geese = geese[i]
       if(otro.includes(geese)){
           arrefinal.push(geese)

        console.log(arrefinal)
       }
      
    }




