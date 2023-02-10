let menuVisible = false;
//Función que oculta o muestra el menu.
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    //Oculto le mmenu una vez que selecciona una opción.
    document.getElementById("nav").classList="";
    menuVisible = false;
}

//Función que aplica las animaciones de las habilidades.
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("python");
        habilidades[3].classList.add("mysql");
        habilidades[4].classList.add("java");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("capacidad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("resilencia");
    }
}
//Detectar el scrolling para aplicar las animaciones de la barra de habilidades.
window.onscroll = function(){
    efectoHabilidades();
}