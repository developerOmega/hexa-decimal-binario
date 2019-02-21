import funcionOpciones from './modulos/opciones';
import generarContraseña from './modulos/copiar';
import Operador from './modulos/clases';

let copiar = document.getElementById('copiar');

const traductor = document.getElementsByName('traductor')[0];

/*--------------------------------------------------*/
/*Seleccion de opciones*/
/*--------------------------------------------------*/
funcionOpciones();

/*--------------------------------------------------*/
/*Copiar traduccion*/
/*--------------------------------------------------*/
copiar.addEventListener("click",generarContraseña);


/*--------------------------------------------------*/
/*Clases*/
/*--------------------------------------------------*/
const valor = new Array();
let c = 0;

traductor.aceptar.addEventListener("click",(e)=>{
    valor[c] = new Operador(traductor.escribir.value);

    /*Validar metodos */
    if(traductor.className == 'Binario-Hexadecimal') valor[c].binarioHexadecimal();  
    else if(traductor.className == 'Binario-Decimal') valor[c].binariosDecimales();
    else if(traductor.className == 'Hexadecimal-Binario') valor[c].hexadecimalBinario();
    else if(traductor.className == 'Hexadecimal-Decimal') valor[c].hexadecimalDecimal();
    else if(traductor.className == 'Decimal-Binario') valor[c].decimalBinario();
    else if(traductor.className == 'Decimal-Hexadecimal') valor[c].decimalHexadecimal();
    
    c++;
});


//----------------SOLO BINARIOS A DECIMAL--------------//

/*traductor.escribir.addEventListener("keypress",function(e){
    var key = window.event ? e.which : e.keyCode;
    if (key < 48 || key > 49) {
        e.preventDefault();
    }
},false);*/

/*INVESTIGAR:
.charCodeAt() 
String.fromCharCode()*/
 
