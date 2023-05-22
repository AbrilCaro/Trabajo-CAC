
/* function mostrarAlerta(){
    alert("Comprar tickets pronto");
};
*/

function alertaOrador(){
    alert("Pronto podras ser orador");
};
function alertaFormulario(){
    alert("Formulario enviado, muchas gracias: " + document.getElementById("exampleFormControlInput2").value)
}

document.getElementById("botoncomprar").onclick = mostrarAlerta ;
document.getElementById("botoncomprar2").onclick = mostrarAlerta ;
document.getElementById("botonorador").onclick = alertaOrador ;
document.getElementById("botondeenviar").onclick = alertaFormulario ;



function borrarCampos(){
    document.getElementById("inputNombre").value = "funciona";
    
};
