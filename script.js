/*
 * Copyright (c) 2024 Your Company Name
 * All rights reserved.
 */
let menuVisible=false;
//funcion que oculta o muestra el menu

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible= false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible= true;
    }
}
function seleccionar(){
    //oculto en el menuun vez que selecciono una opcion
    document.getElementById("nav").classList="";
    menuVisible=false;
    
}       
//Funcion que aplica a las animaciones de las habilidades
function efectoHabilidades(){
    var skills =document.getElementById("skills");
    var distancia_skills =window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills>=300){
         let habilidades= document.getElementsByClassName("progreso");
         habilidades[0].classList.add("javascript");
         habilidades[1].classList.add("htmlcss");
         habilidades[2].classList.add("wordpress");
         habilidades[3].classList.add("comunicacion");
         habilidades[4].classList.add("trabajoenequipo");
         habilidades[5].classList.add("creatividad");
         habilidades[6].classList.add("dedicacion");
         
    }
}

//detecto el scrolling  para aplicar la animacion de la barra de habilidades
    window.onscroll = function(){
        efectoHabilidades();
    }