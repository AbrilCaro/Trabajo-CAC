
/* function mostrarAlerta(){
    alert("Comprar tickets pronto");
};



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

*/



// ESTUDIANTE //

var precio = 200;
let estudiante = 80;
var porcentaje = (precio * estudiante) /100;
var resultado = precio - porcentaje;

// TRAINEE //
let trainee = 50;
let porcentajeT = (precio * trainee) /100;
var resultadoT = precio - porcentajeT;

// JUNIOR //
let junior = 15;
let porcentajeJ = (precio * junior) /100;
var resultadoJ = parseInt(precio - porcentajeJ);


// CALCULAR RESUMEN //

function calcularResumen(){
    if (document.getElementById("inputCategoria").value==1){
        let cantidad = document.getElementById("inputCantidad").value;
        document.getElementById("inputTotal").placeholder= "Total a Pagar: $ " + cantidad * resultado;
    }
    else if (document.getElementById("inputCategoria").value==2){
        let cantidad = document.getElementById("inputCantidad").value;
        document.getElementById("inputTotal").placeholder= "Total a Pagar: $ " + cantidad * resultadoT;
    
    }
    else {
        let cantidad = document.getElementById("inputCantidad").value;
        document.getElementById("inputTotal").placeholder= "Total a Pagar: $ " + cantidad * resultadoJ;
    
    };

};

// BORRAR CAMPOS //

function borrarCampos(){
    document.getElementById("inputNombre").value = ""; 
    document.getElementById("inputApellido").value = "";
    document.getElementById("inputCorreo").value = "";
    document.getElementById("inputCantidad").value = "";
    document.getElementById("inputTotal").placeholder= "Total a Pagar: $ ";
    document.getElementById("inputCategoria").value = "";
}

//REQUIRED

function validaciones(){
    if (document.getElementById("inputNombre").value==""){
        alert("Su nombre es requerido");
        
    }

    if (document.getElementById("inputApellido").value==""){
        alert("Su apellido es requerido");
        
    }

    if (document.getElementById("inputCorreo").value==""){
        alert("Su correo es requerido");
        
    }

    if (document.getElementById("inputCantidad").value==""){
        alert("Debe especificar una cantidad");
        
    }

}

function ejecutar(){
    validaciones();
    calcularResumen();
}

// REDIRIGIR //

const redirigir = document.getElementById("botoncomprar2");

redirigir.onclick = function() {
    window.location.href = "./javas.html";
};
