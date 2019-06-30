// De cuatro corredores de atletismo se sabe que C a llegado inmediatamente 
// detras de B, y D ha llegado en medio de A y C. ¿Sabria usted el orden de llegada?

let atleta = {
    A:0,
    B:0,
    c:0,
    D:0,

    resultado: function(){
        if( atleta.C > atleta.B&&
            atleta.D > atleta.B&&
            atleta.A > atleta.D&&
            atleta.C < atleta.D ){
            

                return true;
            }

            return false;
    },

        intervalo:setInterval(() => {

            atleta.A = Math.ceil(Math.random()*4);
            atleta.B = Math.ceil(Math.random()*4);
            atleta.C = Math.ceil(Math.random()*4);
            atleta.D = Math.ceil(Math.random()*4);


            if(atleta.resultado()){
                clearInterval(atleta.intervalo);
                console.log("Atleta A", atleta.A)
                console.log("Atleta B", atleta.B)
                console.log("Atleta C", atleta.C)
                console.log("Atleta D", atleta.D)
            }
        }, 1)
}