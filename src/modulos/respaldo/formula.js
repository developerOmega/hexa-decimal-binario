import objetos from './variables';

const valorSumatoria = new Array(objetos.regla.length);
let resultado = 0;

/*------------------------------------VALIDAR FUNCIONES BINAROS Y HEXADECIMALES--------------------------------- */
const validarBinario = (valor) => {
    /*Validacion de 0 y 1 */
    for (let c = 0; c < valor.length; c++) {
        if(valor[c] == 0 || valor[c] == 1 || valor[c] == undefined || valor[c] == ' ');
        else valor = '0';
        // console.log(valor[c]);
    }

    return valor;
}

const validarHexadecimal = (valor) =>{
    for (let i = 0; i < valor.length; i++) {
        if(valor[i] == 1 || valor[i] == 2 || valor[i] == 3 || valor[i] == 4 || valor[i] == 5 || valor[i] == 6 || valor[i] == 7 ||valor[i] == 8 ||
        valor[i] == 9 ||valor[i] == 'a' ||valor[i] == 'b' ||valor[i] == 'c' ||valor[i] == 'd' ||valor[i] == 'e' ||valor[i] == 'f' ||
        valor[i] == 'A' ||valor[i] == 'B' ||valor[i] == 'C' ||valor[i] == 'D' ||valor[i] == 'E' ||valor[i] == 'F' || valor[i]== ' ');
        else valor = '0';
    }

    return valor;
}
/*----------------------------------------------------------------------------------------------------------------*/

const binariosDecimales = (valor)=>{

    valor = validarBinario(valor);

    let separador = valor.split(" "),
        invertir = new Array(),
        imprimir = new Array();


    for (let c = 0; c < separador.length; c++) {
        
        invertir[c] = separador[c].length-1;

        for(let i = 0; i<objetos.regla.length; i++){
            valorSumatoria[i] = objetos.regla[i]*separador[c][invertir[c]--];
        }   

        for (let i = 0; i < separador[c].length; i++) {
            resultado = resultado + valorSumatoria[i];
            
        }

        imprimir[c] = resultado;
        

        resultado = 0;
    }

    return imprimir.join(' ');
}

const decimalBinario = (valor) => {
        
    let separador = valor.split(" "),
        resultadoDecimal = new Array(),
        imprimir = new Array(),
        invertir = 0;

    for (let c = 0; c < separador.length ; c++) {
        
        let m = 0;
        for (let i = objetos.regla.length-1; i >= 0 ; i--) {
            if(separador[c] >= objetos.regla[i]){
                separador[c] = separador[c] - objetos.regla[i];
                resultadoDecimal[invertir++] = 1;
            }else{
                resultadoDecimal[invertir++] = 0;
            }
            
            if(resultadoDecimal[m] == 0){
                resultadoDecimal.splice(m,1,undefined);
                m++;
            }

        }

        imprimir[c] = resultadoDecimal.join('');
        invertir =0;
    }
    
    return imprimir.join(' ');
    
}

const hexadecimalBinario = (valor) => {

    valor = validarHexadecimal(valor);

    let separador = valor.split(' ');
    
    let guardar = new Array(),
        resultado = new Array();

    /*Validar Datos hexadecimales*/
    for (let i = 0; i <valor.length; i++) {
        if(valor[i] == 'A' || valor[i] == 'a') guardar[i] = '10';
        else if(valor[i] == 'B' || valor[i] == 'b')guardar[i] = '11';
        else if(valor[i] == 'C' || valor[i] == 'c')guardar[i] = '12';
        else if(valor[i] == 'D' || valor[i] == 'd')guardar[i] = '13';
        else if(valor[i] == 'E' || valor[i] == 'e')guardar[i] = '14';
        else if(valor[i] == 'F' || valor[i] == 'f')guardar[i] = '15';
        else guardar[i] =valor[i];  
    }
    
    /*funcion de valores divididos en arreglos*/ 
    for (let i = 0; i < guardar.length; i++) {
        
        /*almacenar elementos undefined a el elemento del arreglo 'resultado' */
        resultado[i] = new Array(4);
        for (let c = 0; c < resultado[i].length; c++) {
            resultado[i][c] = undefined;
        }

        /*convertir los elementos decimales del arreglo 'guardar' a hexadecimales con la funcion  'decimalBinario()'*/
        guardar[i] = decimalBinario(guardar[i]);
        guardar[i] = guardar[i].split('');/*convertir el resultado de la funcion  'decimalBinario()' en arreglo*/

        let contador = guardar[i].length-1;/*crear un contador que contenga los valores del arreglo 'guardar[i]' */
        
        /*Alamacenar los valores de arreglo 'guardar[i]' en la variable 'resultado[i]' */
        for (let c = resultado[i].length-1 ; c >= 0; c--) {
            
            resultado[i][c] = guardar[i][contador--];
            
            /*Si hay un valor del arreglo 'resultado[i]' con undefined, convertirlo a valor 0*/
            if(resultado[i][c] == undefined) resultado[i][c] = '0';
        }
        
        /*Convertir los valores del arreglo 'resultado[i]' en un resultado caracter y almacelarlo en 'guardar[i]'*/
        guardar[i] =resultado[i].join("");
    }

    /*Retornar los valores del arreglo guardar y convertila de arreglos a valor caracter*/
    return guardar.join("");
    
}

const binarioHexadecimal = (valor) => {
    
    valor = validarBinario(valor);

    const almacenar = new Array(),
        agrupar = new Array();
    
    let contadorAlmacen = 0;


    /*Almacenar 'valor' en varible almacenar*/
    for(let i = valor.length-1 ; i >= 0 ; i--) almacenar[contadorAlmacen++] = valor[i];
    
    contadorAlmacen = 0;
    let contador = 0;
    

    /*Agrupar los arreglos en cuatro sifras*/ 
    for (let c = 0; c <= agrupar.length; c++) {
        
        if(contador < almacenar.length){
        
            agrupar[contadorAlmacen] = new Array();
            
            for (let i = 0; i < 4; i++) {

                agrupar[contadorAlmacen][i] = almacenar[contador++];
                if(agrupar[contadorAlmacen][i] == undefined )agrupar[contadorAlmacen][i] = '0';
            }  
        
            contadorAlmacen++;
        }

    }

    /*Invertir la posicion del arreglo de los valores 'agrupar'*/
    let agruparTotal = new Array();

    for (let i = 0; i <= agrupar.length-1; i++) {
        contadorAlmacen = 0;
        agruparTotal[i] = new Array();
       
        for (let c = agrupar[i].length-1; c >= 0 ; c--) {
            agruparTotal[i][contadorAlmacen++] = agrupar[i][c];
        }
    }

    /*Transformar lo valores binarios a decimales y convertilos a hexadecimales con la funcion 'binariosDecimales()'*/
    contadorAlmacen = 0;

    for (let i = agrupar.length-1 ; i >= 0   ; i--) {
        
        agrupar[contadorAlmacen] = binariosDecimales(agruparTotal[i].join(''));
        
        if(agrupar[contadorAlmacen] == '10') agrupar[contadorAlmacen] = 'A';
        else if(agrupar[contadorAlmacen] == '11') agrupar[contadorAlmacen] = 'B';
        else if(agrupar[contadorAlmacen] == '12') agrupar[contadorAlmacen] = 'C';
        else if(agrupar[contadorAlmacen] == '13') agrupar[contadorAlmacen] = 'D';
        else if(agrupar[contadorAlmacen] == '14') agrupar[contadorAlmacen] = 'E';
        else if(agrupar[contadorAlmacen] == '15') agrupar[contadorAlmacen] = 'F';
        
        contadorAlmacen++;  
    }
 
    return agrupar.join('');
}

const decimalHexadecimal = (valor) => {

    let separador = valor.split(' '),
        binario = new Array(),
        hexadecimal = new Array();

    for (let i = 0; i <= separador.length-1; i++) {
        binario[i] = decimalBinario(separador[i]);
        hexadecimal[i] = binarioHexadecimal(binario[i]);
    }

    return hexadecimal.join(' ');
}

const hexadecimalDecimal = (valor) => {
    
    valor = validarHexadecimal(valor);
    
    let separador = valor.split(' '),
        binario = new Array(),
        decimal = new Array();
    
    for (let i = 0; i < separador.length; i++) {
        binario[i] = hexadecimalBinario(separador[i]);
        decimal[i] = binariosDecimales(binario[i]);
    }

    return decimal.join(' ');
}

export {binariosDecimales,decimalBinario,hexadecimalBinario,binarioHexadecimal,decimalHexadecimal,hexadecimalDecimal};
