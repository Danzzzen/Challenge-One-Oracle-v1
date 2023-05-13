var botonEncriptar = document.querySelector(".btn1");
var botonDesencriptar = document.querySelector(".btn2");
var gatoDesk = document.querySelector(".img-container");
var contenedor = document.querySelector(".parrafo-container")
var resultado = document.querySelector(".text-result");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = deseincriptar;

function encriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = encriptarTexto(cajatexto);
}

function deseincriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto(){
    var cajatexto = document.querySelector(".text-box")
    return cajatexto.value
}

function ocultarAdelante(){
    gatoDesk.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
    }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
    }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
    }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
    }
    else{
        textoFinal = textoFinal + texto[i];
    }
    }
    return textoFinal;
}    

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
    }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
    }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
    }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
    }
    else{
        textoFinal = textoFinal + texto[i];
    }
    }
    return textoFinal;
}    


const btnCopiar = document.querySelector(".btn-copiar");
btnCopiar.addEventListener("click", copiar = () =>{
    var contenido = document.querySelector(".text-result").textContent;
    navigator.clipboard.writeText(contenido);
})