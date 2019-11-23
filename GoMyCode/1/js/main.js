var Textarea=document.getElementById('txt');



function changerBold(){
    if (Textarea.style.fontWeight=="bold"){
    Textarea.style.fontWeight="normal"
    }
    else{
    Textarea.style.fontWeight="bold";
    }
}


function changerItalic(){
    if (Textarea.style.fontStyle=="italic"){
        Textarea.style.fontStyle="normal"
    }
    else{
    Textarea.style.fontStyle="italic";
    }
}
function changerUnder(){
    if (Textarea.style.textDecoration=="underline"){
        Textarea.style.textDecoration="none"
    }
    else{
    Textarea.style.textDecoration="underline";
    }
}

function fntaille(){
    var t=document.getElementById("taille").value;
    var x=document.getElementById("txt");
    x.style.fontSize=t;
}
function fnfont(){
    var t=document.getElementById("font").value;
    var x=document.getElementById("txt");
    x.style.fontFamily=t;
}