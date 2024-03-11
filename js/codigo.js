//modal light box
var cerrar = document.querySelectorAll(".close")[0];
var modalC = document.querySelectorAll(".modal-conteiner")[0];

cerrar.addEventListener("click", function(){
    modalC.style.display="none";
})

//fecha
function mueveReloj(){
    momentoActual = new Date();  // llamo a la funcion de fecha
    hora = momentoActual.getHours(); //agarro las horas
    minuto = momentoActual.getMinutes(); //agarro los minutos

    horaImprimible = hora + " : " + minuto + " hs";  // lo concateno

    document.form_reloj.reloj.value = horaImprimible; //lo meto adentro de donde va

    setTimeout("mueveReloj()",60000);   // para que la funcion se llame cada un segundo
}

//btn nav home
irpantallahome.addEventListener("click", function(){
    irhome();
 })

//fidget toy
var apretame = document.getElementById("apretame"); // boton
var contadorclicks = document.getElementById("contadorclicks"); //div para contar
var contador = 0; //contador
apretame.onclick= function(){ //funcion que se ejecuta cuando se hace cick en el boton
contador++;
contadorclicks.innerHTML = contador;
}


//funcion que me lleva a los juegos
var juegos =document.getElementById("juegos");
var juebtn =document.getElementById("jue");

juebtn.addEventListener("click", function(){
    jt.style.display="block";
    home.style.display="none";
    pantallaChatbot.style.display="none";
    pantallawall.style.display="none";
    juegos.style.display="block";
    pregunta.value="Queres hacerme una pregunta?";
    respuesta.innerHTML="";
    reiniciajuegos();
})

//juegos
//juego 1 Oraculo
var juego1 = document.getElementById("portada1");
var juego11 = document.getElementById("juego11");
var contenedor = document.getElementById("contenedorjuegos");
var jt = document.getElementById("jt");

// juego1 oraculo
juego1.addEventListener("click", function(){
    jt.style.display="none";
    contenedor.style.display="none";
    juego11.style.display="block";
    juego22.style.display="none";
    juego33.style.display="none";
})

//juego2 bomba de tiempo
var juego2= document.getElementById("portada2");
var juego22 = document.getElementById("juego22");

juego2.addEventListener("click", function(){
    jt.style.display="none";
    contenedor.style.display="none";
    juego22.style.display="block";
    juego11.style.display="none";
    juego33.style.display="none";
})

//juego3 piedra papel o tijera
var juego3=  document.getElementById("portada3");
var juego33 = document.getElementById("juego33");

juego3.addEventListener("click", function(){
    jt.style.display="none";
    contenedor.style.display="none";
    juego33.style.display="block";
    juego11.style.display="none";
    juego22.style.display="none";
})

//funcion que reinicia juegos
 function reiniciajuegos (){
    contenedor.style.display = "block";
    juego11.style.display = "none";
    juego22.style.display = "none";
    juego33.style.display = "none";
 }


// funcion que lleva al home
function irhome(){
    jt.style.display="none";
    home.style.display="block";
    pantallawall.style.display="none";
    pantallaChatbot.style.display="none";
    contadorclicks.innerHTML = 0;
    contador = 0;
    pregunta.value="Queres hacerme una pregunta?";
    respuesta.innerHTML="";
    reiniciajuegos();
    contenedor.style.display="none";
}

//modal 2
var cerrarr = document.querySelectorAll(".close1")[0];
var modalCc = document.querySelectorAll(".modal-conteiner1")[0];

cerrarr.addEventListener("click", function(){
    modalCc.style.display="none";
})


//chat bot
var chtbt = document.getElementById("chtbt"); //btn nav
var pantallaChatbot = document.getElementById("chatbot"); // pantalla
var pregunta = document.getElementById("txtpregunta"); //input de la pregunta
var respuesta = document.getElementById("txtrespuesta"); // la respuesta
var preguntar = document.getElementById("resultado"); //boton

// boton que muestra el chatbot
chtbt.addEventListener("click", function(){
    jt.style.display="none";
    home.style.display="none";
    juegos.style.display="none";
    pantallaChatbot.style.display="block";
    pantallawall.style.display="none";
    reiniciajuegos();
    contenedor.style.display="none";
})

pregunta.addEventListener("click",function(){ //para que se borre el valor del input
    pregunta.value="";
})

// respuestas para preguntas predeterminadas
preguntar.addEventListener("click", function(){
    switch(pregunta.value){

        case "hola":
            respuesta.innerHTML = "hola, como estas?"
            break
        
        case "bien y vos?":
            respuesta.innerHTML = "ahora que estas conmigo, mejor"
             break


        case "hola, como estas?":
            respuesta.innerHTML = "Bien, aunque si estuvieras aca mejor, vos?"
            break

        case "bien":
            respuesta.innerHTML = "me alegro!"   
            break

        case "quien sos?":
            respuesta.innerHTML = "Soy la reina del inframundo, guardiana de los secretos muertos. Hija de Zeus y Deméter. Diosa de la primavera";
            break

        case "como te llamas?":
            respuesta.innerHTML = "Perséfone";
            break

        case "cuantos años tenes?":
            respuesta.innerHTML = "El tiempo es relativo";    
                break

        case "de donde sos?":
            respuesta.innerHTML = "Estoy atrapada en el medio de dos infinitos";
                break

        case "cual es tu color preferido?":
            respuesta.innerHTML = "El de tus ojos";
                break
       
     default:
        respuesta.innerHTML = "Si contestara eso, tendria que llevarte al inframundo conmigo";
                
    }
})

//pantalla wallpapper
var wall = document.getElementById("wallpapper");
var pantallawall = document.getElementById("pantalla-wal");
var home = document.getElementById("home");
var foto = document.getElementById("foto");
var srcfoto = ["./images/c1.jpg","./images/c2.jpg","./images/c3.jpg","./images/c4.jpg","./images/c5.jpg","./images/c6.jpg","./images/c7.jpg","./images/c8.jpg","./images/c9.jpg","./images/c10.jpg","./images/c11.jpg","./images/c12.jpg"];

// funcion que muestra imagenes de manera aleatoria
foto.addEventListener("click", function(){
    var random = Math.floor (Math.random()*(11-0+1))+0;
    foto.setAttribute("src",srcfoto[random]);
    console.log(random);
})

// boton que te lleva a los wallpapers
wall.addEventListener("click", function(){
    jt.style.display="none";
    home.style.display="none";
    pantallaChatbot.style.display="none";
    pantallawall.style.display="block";
    juegos.style.display="none";
    pregunta.value="Queres hacerme una pregunta?";
    respuesta.innerHTML="";
    contenedor.style.display="none";
    reiniciajuegos();
})

//animejs
var miDiv = document.getElementById("foto2");
miDiv.addEventListener("click",function(){
   miAnimacion.play();
})

var miAnimacion = anime({
    targets: miDiv,
    opacity: 0.5,
    translateX: 250,
    duration: 2000
  });