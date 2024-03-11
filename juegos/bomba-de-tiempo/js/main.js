//pantalla 1    
var nombre = document.getElementById("nombre");
var info = document.getElementById("nombreju");
var boton1 = document.getElementById("irapantalla2");
var audio = document.getElementById("audios"); //para cambiar los audios cuando cambian las pantallas

//funciones mostrar pantalla 2
function mostrarPantalla2(){
    document.querySelector("#pantalla1").style.display = "none";
    document.querySelector("#pantalla2").style.display = "block";
    document.querySelector("#pantalla3").style.display = "none";
    document.querySelector("#pantalla4").style.display = "none";
    audio.setAttribute("src", "./multimedia/tictac.mp3");
}

//que el boton comenzar ponga header, vacie input y lleve a pantalla2
boton1.onclick = function(){
nombre.innerHTML = info.value;   //ponemos nombre del input en el header
info.value="";                   // para que despues de ingresar el nombre vuelva a vaciarse el input
reinicio_cuenta();
reiniciocable();
clearInterval(intervalo);
clearInterval(intervalo2);
divcuentaregresiva.innerHTML = "60";
mostrarPantalla2();                          // funcion para que lleve a pantalla 2

}

//pantalla2
var divcuentaregresiva = document.getElementById("cuentaregresiva");//div donde se ve la cuenta regresiva
var activar= document.getElementById("activarbomba"); // boton que activa la bomba
var intervalo; //tengo que declarar la variable fuera de la funcion para que pueda darle clear desde todo el dom.

// funcion de la cuenta regresiva
activar.onclick = function(){
    iniciarcuentaregresiva();
}

function iniciarcuentaregresiva(){ 
     var valorinicial = 60;
     intervalo = setInterval(function(){
        divcuentaregresiva.innerHTML = valorinicial;
        if(valorinicial !== 0){
            valorinicial --;

        }  
    }, 1000);
}

// funciones de cables
var random ; //para que nos de una posicion random
var cables= document.getElementsByClassName("cables"); //cables que formaran parte del random

// FUNCION QUE REINICIA EL CABLE RANDOM
function reiniciarRandom (){      
    random =  Math.floor(Math.random()*(9-0))+0;
    console.log(random);
}


// arma un cable ganador pide un numero random y le asigna esa clase a esa posicion 
function cableGanador (){
    reiniciarRandom();
    cables[random].setAttribute("class","ganador");
}
cableGanador(); // cable que desactiva la bomba 

//Un For recorre los cables y asigna las funciones correspondientes segun la clase
for(i=0;i<cables.length; i++){
    if (cables[i].getAttribute("class")=="cables") {
        cables[i].onclick= cableincorrecto;
        console.log(cables[i]);
    }
}

var intervalo2; //tengo que declarar la variable fuera de la funcion para que pueda darle clear desde todo el dom.

//funcion para restar 10 segundos al contador
function cableincorrecto () {
        var timeactual = divcuentaregresiva.innerHTML;
        
        var resta= timeactual-10;  //segundos que quedan
            if (resta<0) {
                resta= 0;
            mostrarPantalla3();
            }
                clearInterval(intervalo); 
                clearInterval(intervalo2);
                    intervalo2 = setInterval(function(){
                        divcuentaregresiva.innerHTML = resta;
                        if(resta > 0){
                            resta --;
                        } if(resta==0){
                            mostrarPantalla3();
                            resta=10000000000000000; //para que cuando llegue a cero pase a la pantalla de perder y nos deje jugar de nuevo
                        }
                    }, 1000);
                document.getElementById("ups").style.display="block"; //muestro el mensaje que avisa que tiene 10seg menos
                //el timeout establece que luego de ese tiempo, el mensaje desaparecera nuevamente.
                setTimeout(function(){
                    document.getElementById("ups").style.display="none";
                },3000);           
     }



// funcion que desactiva una bomba
function reiniciocable(){
    var desactivaBomba = document.getElementsByClassName("ganador");
        for(i=0;i<desactivaBomba.length;i++){
            desactivaBomba[i].onclick=function(){
            bomba_desactivada();
            }
            console.log(desactivaBomba[i]);
        }
}

reiniciocable();

//funcion que determina que cuando hay 3 bombas desactivadas ganas
 function bomba_desactivada(){
    var cantBombas= parseInt(document.getElementById("cantbombas").innerHTML);
    var bomba_actual=cantBombas+1;
    document.getElementById("cantbombas").innerHTML=bomba_actual;
        reiniciar_bomba();
        if(bomba_actual==3){
            mostrarPantalla4();
        }
     }
     var desactivaBomba;
function reiniciar_bomba(){
    desactivaBomba = document.getElementsByClassName("ganador"); 
    for(i=0;i<desactivaBomba.length;i++){
        if(desactivaBomba[i].getAttribute("class")=="ganador"){  
            desactivaBomba[i].setAttribute("class","cables");
          }
    }
    cableGanador();
    reiniciocable();
    reinicio_errores();
    clearInterval(intervalo);
    clearInterval(intervalo2);
    iniciarcuentaregresiva();
 }
 function reinicio_cuenta(){
    document.getElementById("cantbombas").innerHTML="0";
 }
 function reinicio_errores(){   //les vuelvo a dar la class cables a todos.
    for(i=0;i<cables.length; i++){
        if (cables[i].getAttribute("class")=="cables") {
            cables[i].onclick= cableincorrecto;
            console.log(cables[i]);
        }
    }
 }

 //funcion que te lleva a la pantalla3 de looser
function mostrarPantalla3(){
    document.querySelector("#pantalla1").style.display = "none";
    document.querySelector("#pantalla2").style.display = "none";
    document.querySelector("#pantalla3").style.display = "block";
    document.querySelector("#pantalla4").style.display = "none";
    audio.setAttribute("src", "./multimedia/pantalla3.mp3");
   
}


//pantalla 3 looser
//funcion para que el boton jugar de nuevo lleve a pantalla1 para jugar de nuevo despues de perder
function mostrarPantalla1(){
    document.querySelector("#pantalla1").style.display = "block";
    document.querySelector("#pantalla2").style.display = "none";
    document.querySelector("#pantalla3").style.display = "none";
    document.querySelector("#pantalla4").style.display = "none";
    audio.setAttribute("src", "./multimedia/pantalla1.mp3"); //cambia el sonido
   
}

var btnjugardnuevol =document.getElementById("jugardenuevol");

btnjugardnuevol. onclick = function(){
   mostrarPantalla1();
}

//pantalla 4 winer
function mostrarPantalla4(){
    document.querySelector("#pantalla1").style.display = "none";
    document.querySelector("#pantalla2").style.display = "none";
    document.querySelector("#pantalla3").style.display = "none";
    document.querySelector("#pantalla4").style.display = "block";
    audio.setAttribute("src", "./multimedia/pantalla4.mp3");
}

//funcion para el boton

var btnjugardenuevo2 = document.getElementById("jugardenuevo2");
btnjugardenuevo2.onclick = function () {
   mostrarPantalla1 ();
  
}

