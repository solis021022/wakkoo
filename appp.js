let dia = document.querySelector("#dia");
let vdia = document.querySelector("#vdia");
let mes = document.querySelector("#mes");
let vmes = document.querySelector("#vmes");
let ri = document.querySelector("#ri");
let im = document.querySelector("#im");
  let card = document.querySelector("#card");
vdia.innerHTML = dia.value;
  dia.oninput =()=>{
  vdia.innerHTML= dia.value;
  let n= parseInt(dia.value);
  

vmes.innerHTML=mes.value ;
mes.onchange=()=>{
  vmes.innerHTML=  mes.value ;
  let m=(mes.value);
  
    ri.innerHTML=  n+ " DE " + m ;
  


if ((m=== "ENERO" && n>= 20) || (m=== "FEBRERO" && n<= 18)) {
    im.innerHTML="<img src='acua.jpg' width=100px>";
}
else if ((m === "FEBRERO" && n >= 19) || (m === "MARZO" && n <= 20)) {
    im.innerHTML="<img src='pis.jpg' width=100px>";
}
else if ((m === "MARZO" && n >= 21) || (m=== "ABRIL" && n <= 19)) {
    im.innerHTML="<img src='aries.jpg' width=100px>";
}
else if ((m === "ABRIL" && n >= 20) || (m=== "MAYO" && n<= 20)) {
    im.innerHTML="<img src='tauro.jpg' width=100px>";
}
else if ((m === "MAYO" && n>= 21) || (m === "JUNIO" && n<= 20)) {
    im.innerHTML="<img src='geminis.jpg' width=100px>";
}
else if ((m=== "JUNIO" && n >= 21) || (m=== "JULIO" && n <= 22)) {
    im.innerHTML="<img src='cancer.jpg' width=100px>";
}
else if ((m === "JULIO" && n >= 23) || (m === "AGOSTO" && n<= 22)) {
  im.innerHTML="<img src='leo.jpg' width=100px>";
}
else if ((m=== "AGOSTO" && n >= 23) || (m === "SEPTIEMBRE" && n <= 22)) {
    im.innerHTML="<img src='virgo.jpg' width=100px>";
}
else if ((m=== "SEPTIEMBRE" && n>= 23) || (m === "OCTUBRE" && n <= 22)) {
    im.innerHTML="<img src='libra.jpg' width=100px>";
}
else if ((m=== "OCTUBRE" && n >= 23) || (m === "NOVIEMBRE" && n <= 21)) {
    im.innerHTML="<img src='escor.jpg' width=100px>";
}

else if ((m=== "NOVIEMBRE" && n>= 22) || (m=== "DICIEMBRE" && n <= 21)) {
      im.innerHTML="<img src='sag.jpg' width=100px>";

}
else if ((m=== "DICIEMBRE" && n>= 22) || (m=== "ENERO" && n <= 19)) {
      im.innerHTML="<img src='capri.jpg' width=100px>";

}











dia.oninput=()=>{
  vdia.innerHTML=  dia.value ;
  let n=(dia.value);
  
  spinner.innerHTML="<img src='hola.gif' width=100px>";
  setTimeout(()=>{
    spinner.innerHTML="";
    ri.innerHTML=  n+ " DE " + m ;
  


if ((m=== "ENERO" && n>= 20) || (m=== "FEBRERO" && n<= 18)) {
    im.innerHTML="<img src='acua.jpg' width=100px>";
}
else if ((m === "FEBRERO" && n >= 19) || (m === "MARZO" && n <= 20)) {
    im.innerHTML="<img src='pis.jpg' width=100px>";
}
else if ((m === "MARZO" && n >= 21) || (m=== "ABRIL" && n <= 19)) {
    im.innerHTML="<img src='aries.jpg' width=100px>";
}
else if ((m === "ABRIL" && n >= 20) || (m=== "MAYO" && n<= 20)) {
    im.innerHTML="<img src='tauro.jpg' width=100px>";
}
else if ((m === "MAYO" && n>= 21) || (m === "JUNIO" && n<= 20)) {
    im.innerHTML="<img src='geminis.jpg' width=100px>";
}
else if ((m=== "JUNIO" && n >= 21) || (m=== "JULIO" && n <= 22)) {
    im.innerHTML="<img src='cancer.jpg' width=100px>";
}
else if ((m === "JULIO" && n >= 23) || (m === "AGOSTO" && n<= 22)) {
  im.innerHTML="<img src='leo.jpg' width=100px>";
}
else if ((m=== "AGOSTO" && n >= 23) || (m === "SEPTIEMBRE" && n <= 22)) {
    im.innerHTML="<img src='virgo.jpg' width=100px>";
}
else if ((m=== "SEPTIEMBRE" && n>= 23) || (m === "OCTUBRE" && n <= 22)) {
    im.innerHTML="<img src='libra.jpg' width=100px>";
}
else if ((m=== "OCTUBRE" && n >= 23) || (m === "NOVIEMBRE" && n <= 21)) {
    im.innerHTML="<img src='escor.jpg' width=100px>";
}

else if ((m=== "NOVIEMBRE" && n>= 22) || (m=== "DICIEMBRE" && n <= 21)) {
      im.innerHTML="<img src='sag.jpg' width=100px>";

}
else if ((m=== "DICIEMBRE" && n >= 22) || (m=== "ENERO" && n <= 19)) {
      im.innerHTML="<img src='capri.jpg' width=100px>";
}


},1000)

}
im.style.transform="rotateY(-180deg)";
    im.style.transition="all 0.5s linear";
    im.style.transitionStyle="preserve-3d";
    im.style.backfaceVisibility="hidden";
    
    setTimeout(() => {
      im.style.transform="rotate(0deg)"
    im.style.transform="all 0.5s linear";
    }, 250);
}
}
