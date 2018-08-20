var mifrase = 'hola,amigo,como,estas,hoy,hey';

function volteaConComas(frase) {
    let resultado = frase.split(",");
    console.log(resultado);
    let aux;

    for (let i = 0; i < resultado.length/2; i++) {
      aux=resultado[i];
      resultado[i]=resultado[(resultado.length-1)-i];
      resultado[(resultado.length-1)-i]=aux;
        
    }
    return resultado;
}
console.log(volteaConComas(mifrase))