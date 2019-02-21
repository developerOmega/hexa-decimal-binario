import {binariosDecimales,decimalBinario,hexadecimalBinario,binarioHexadecimal,decimalHexadecimal,hexadecimalDecimal} from './formula';

const cajaResultado = document.getElementById('resultado');

/*Funcion para imprimir resultados en lantalla */
const imprimir =  (variable) => {
    /*Crear elemento 'p' y texto */
    let texto = document.createTextNode(variable),
        elemento = document.createElement('p');
    
    /*Unir elemento a texto */
    elemento.appendChild(texto);

    /*Atributos de elementos */
    elemento.setAttribute('id','texto-resultado');

    /*Retornar el nuevo texto */
    return cajaResultado.replaceChild(elemento,cajaResultado.children[0]);
}  

/*Clases*/
class Operador{
    constructor(valor){
        this.valor = valor;
    }

    binariosDecimales(){
        
        let resultado = binariosDecimales(this.valor); 
        
        imprimir(resultado);
    }

    decimalBinario(){
        
       let resultado = decimalBinario(this.valor);

       imprimir(resultado);
    }

    hexadecimalBinario(){
        
        let resultado =  hexadecimalBinario(this.valor);

        imprimir(resultado);
    }

    binarioHexadecimal(){

       let resultado = binarioHexadecimal(this.valor);

       imprimir(resultado);
    }

    decimalHexadecimal(){

        let resultado = decimalHexadecimal(this.valor);

        imprimir(resultado);
    }

    hexadecimalDecimal(){

       let resultado = hexadecimalDecimal(this.valor);

       imprimir(resultado);
    }
}


export default Operador;