const opciones = document.getElementById('opciones'),
    subOpciones = document.getElementById('subOpciones'),
    traductor = document.getElementById('traductor');

const funcionOpciones = ()=>{
    for (let c = 0; c < opciones.children[0].children.length; c++) {

        opciones.children[0].children[c].addEventListener('click',()=>{

            for (let i = 0; i< opciones.children[2].children.length; i++) {
                if (i==c) {
                    opciones.children[2].children[i].className = 'block';
                    opciones.children[0].children[i].className = 'press';
                }else{
                    opciones.children[2].children[i].className = 'none';
                    opciones.children[0].children[i].className = '';
                }
            }
        });
    }

    for (let m = 0; m < subOpciones.children.length; m++) {
        for (let c = 0; c < subOpciones.children[m].children.length; c++) {
            
            subOpciones.children[m].children[c].addEventListener('click',() => {
                
                /*Agregar variables con los valos innerHTML de 'opciones' y 'subOpciones'*/
                let opcionesInner = opciones.children[0].children[m].innerHTML,
                    subOpcionesInner = subOpciones.children[m].children[c].innerHTML;
                /*------------------------------------------------------------------------*/
                
                for (let i = 0; i < subOpciones.children[m].children.length; i++) {
                    if (i == c) {
                        subOpciones.children[m].children[i].className = 'press';/*Agregar color obscuro a la opcion seleccionada  */
                        traductor.className = `${opcionesInner}-${subOpcionesInner}`;/*Agregar clases al formulario*/
                    }else{
                        subOpciones.children[m].children[i].className = '';
                    }
                }
            });    
        }
            
    }
    
    // subOpciones.children[0].children[0].addEventListener('click',()=>{
    //     traductor.className = 'binario-Hexadecimal';
    // });

    // subOpciones.children[0].children[1].addEventListener('click',()=>{
    //     traductor.className = 'binario-Decimal';
    // });

    // subOpciones.children[0].children[1].addEventListener('click',()=>{
    //     traductor.className = 'hexadecimal-Binario';
    // });

    // subOpciones.children[0].children[1].addEventListener('click',()=>{
    //     traductor.className = 'hexadecimal-Decimal';
    // });

    // subOpciones.children[0].children[1].addEventListener('click',()=>{
    //     traductor.className = 'decimal-Binario';
    // });

    // subOpciones.children[0].children[1].addEventListener('click',()=>{
    //     traductor.className = 'decimal-Hexadecimal';
    // });

    
}

export default funcionOpciones;