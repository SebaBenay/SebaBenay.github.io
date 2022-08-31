
function encriptar(){
    var texto= document.getElementById("inputTexto").value.toLowerCase();
    //i es para que afecte tanto mayusculas como minusculas
    //g es para toda la linea u oracion
    //m es para multiples lineas o parrafos

    var txtcifrado= texto.replace(/e/igm,"enter");
    var txtcifrado= txtcifrado.replace(/o/igm,"ober");
    var txtcifrado= txtcifrado.replace(/i/igm,"imes");
    var txtcifrado= txtcifrado.replace(/a/igm,"ai");
    var txtcifrado= txtcifrado.replace(/u/igm,"ufat");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML=txtcifrado;
    document.getElementById("copiar").style.display= "flex"; //ver error
    document.getElementById("copiar").style.display = "flex";  //ver error
}

function desencriptar(){
    var texto= document.getElementById("inputTexto").value.toLowerCase();
    //i es para que afecte tanto mayusculas como minusculas
    //g es para toda la linea u oracion
    //m es para multiples lineas o parrafos

    var txtcifrado= texto.replace(/enter/igm,"e");
    var txtcifrado= txtcifrado.replace(/ober/igm,"o");
    var txtcifrado= txtcifrado.replace(/imes/igm,"i");
    var txtcifrado= txtcifrado.replace(/ai/igm,"a");
    var txtcifrado= txtcifrado.replace(/ufat/igm,"u");

    document.getElementById("imgDer").style.display ="none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML=txtcifrado;
    document.getElementById("copiar").style.display= "flex"; //ver error
    document.getElementById("copiar").style.display = "flex";  //ver error
}


 async function copy(){

 const copy = await copiar()  //async:await; espera a la api y ejecuta los codigos
alert("Texto copiado");
}

function copiar(){
    var texto= document.getElementById("texto2").innerHTML;
    var copy= new Promise((resolve, reject) => {
        resolve(navigator.clipboard.writeText(texto))
    })
    return copy
   
}