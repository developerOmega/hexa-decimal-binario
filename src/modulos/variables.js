 const objetos = {
    regla: new Array(20),

    resultado:setInterval(()=>{
        for (let i = 0; i < objetos.regla.length; i++) {
            objetos.regla[i] = Math.pow(2,i);
        }    
    }, 30)
 }

 export default objetos;