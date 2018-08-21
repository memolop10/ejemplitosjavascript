let cl = console.log

function addOrChangeUrlParameter(url, keyValue) {
    // detectar si el url tiene parametros
        // checar si tiene '?' y algo después de eso
        // split()????
    cl(url)
    if (!url.includes('?')){
        // si no tiene, agrego parametros
        return url + '?' + keyValue
    } else {
        // si sí tiene
        let key = keyValue.split('=')[0]
        if (url.includes('?'+key+'=') || url.includes('&'+key+'=') ) {
            // si sí está, remplazo
            let domain = url.split('?')[0] // 'www.example.com'
            let params = url.split('?')[1] // 'a=1&b=2&c=3'
            let arrParams = params.split('&') // ['a=1','b=2','c=3']
            let nuevosParams = []
            // recorro todos mis parametros para saber cual valor cambiar
            arrParams.forEach(param => {
                if (param.split('=')[0] === key){
                    nuevosParams.push(keyValue)
                } else {
                    nuevosParams.push(param)
                }
                cl(nuevosParams)
            })
            return domain + '?' + nuevosParams.join('&')
        } else {
            // si no está, concateno 
            return url + '&' + keyValue
        }
    }
        // revisa si mi key ya está
            
}

cl(addOrChangeUrlParameter("www.example.com", "key=value") )
// // -> 'www.example.com?key=value' (adds a parameter).

cl(addOrChangeUrlParameter("www.example.com?key=value", "key2=value2" ) )
// // -> 'www.example.com?key=value&key2=value2' (adds another parameter).

cl(addOrChangeUrlParameter("www.example.com?key=oldValue`", "key=newValue" ) )
// // ->'www.example.com?key=newValue' (changes the parameter)

cl(addOrChangeUrlParameter("www.example.com?a=1&b=2&c=3`", "b=8" ) )
// ->'www.example.com?key=newValue&key2=value2' (changes the parameter).