// variables
var nombre = document.getElementById("nombre-jugador"); //header
var infoJugador = document.getElementById("ingreso-nombre"); //input
var opciones = document.getElementsByClassName("usuario"); // piedra papel o tijera
var comenzar = document.getElementById("comenzar"); //boton comenzar
var titulo = document.getElementById("titulo");
var puntos = document.getElementById("contadorpuntos");
var contador;

// boton comenzar
comenzar.onclick = function(){
    nombre.innerHTML = infoJugador.value; // ponemos el nomebre del jugador en el header
    infoJugador.style.display = "none";
    comenzar.style.display="none";
}

// asigno con un for las funciones que debe tener cada imagen
for(i=0; i<opciones.length; i++){
   if(opciones[i]== opciones[0]){
    opciones[i].onclick = function(){
        piedra();
    }
    
    }
    if(opciones[i]== opciones[1]){
        opciones[i].onclick = function(){
            papel();
        }
   }
   if(opciones[i]== opciones[2]){
    opciones[i].onclick = function(){
        tijera();
    }
  
   }
  
}
ganaste();
var contador =0;

// funcion si selecciona piedra
function piedra(){
 var random =  Math.floor(Math.random()*(3-0))+0;
 console.log(random);


 if(random == 0){

    alert("la compu tambien saco piedra, empataste");

    }
    if(random == 1){

            alert("la compu saco papel, perdiste");
             contador=contador-1;
                 puntos.innerHTML=contador;
    }

      if(random == 2){
          alert("la compu saco tijera, ganaste");
             contador=contador+1;
                 puntos.innerHTML=contador;
}
console.log(parseInt(puntos.innerHTML));// me muestra lo del contador
}

//funcion si selecciona papel
function papel(){

var random =  Math.floor(Math.random()*(3-0))+0;

console.log(random);
if(random == 0){
    alert("la compu saco piedra, ganaste");
   contador=contador+1;
   puntos.innerHTML=contador;
}
if(random === 1){
    alert("la compu saco papel, empataste");
    
}
if(random == 2){
alert("la compu saco tijera, perdiste");
contador=contador-1;
puntos.innerHTML=contador;
}
console.log(parseInt(puntos.innerHTML));// me muestra lo del contador
}

//funcion si selecciona tijera
function tijera(){
var random =  Math.floor(Math.random()*(3-0))+0;

console.log(random);
if(random == 0){
    alert("la compu saco piedra, perdiste");
    contador= contador -1;
    puntos.innerHTML = contador;
}
if(random == 1){
    alert("la compu saco papel, ganaste");
   contador=contador+1;
   puntos.innerHTML=contador;
}
if(random == 2){
alert("la compu saco tijera, empataste");


}
console.log(parseInt(puntos.innerHTML));// me muestra lo del contador
} 

//funcion para cuando ganas tres partidas
function ganaste(){
var resultado=(parseInt(puntos.innerHTML));
if(resultado==3){
    alert("GANASTE CAPO");
}
}


