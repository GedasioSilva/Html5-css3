var cxTexto=document.getElementById("cxtexto");
var textoAlerta=document.getElementById("textoAlerta");

cxTexto.addEventListener("keyup",function(event){
    if(event.getModifierState("CapsLock")){
        textoAlerta.style.display="block";
    }else{
        textoAlerta.style.display="none";
    }
})

