var nombre = document.getElementById("nombreenamorado");
var porcen = document.getElementById("porcentaje");
var botonn = document.getElementById("boton");


botonn.onclick  = function(){
    var enamorado = prompt("Cómo se llama tu amor?")
    var random = Math.floor(Math.random()*(100-1+1))+1;
    porcen.innerHTML = enamorado + " está un %" + random + " interesado en vos";
}


