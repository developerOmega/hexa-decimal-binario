
let generarContraseña = () => {
    let elemento = document.createElement('input'),
        texto = document.getElementById('texto-resultado').innerHTML;
    
    elemento.setAttribute('value',texto);
    document.body.appendChild(elemento);

    elemento.select();
    document.execCommand('copy');

    document.body.removeChild(elemento);
}

export default generarContraseña;