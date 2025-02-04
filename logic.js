let si_btn = document.getElementById("si");
let no_btn = document.getElementById("no");
let opciones = document.getElementById("opcion");

function truco(){
    if (opciones.style.flexDirection == "row"){
        opciones.style.flexDirection = "row-reverse"
    }
    else{
        opciones.style.flexDirection = "row"
    }
    console.log("funcionando")
}