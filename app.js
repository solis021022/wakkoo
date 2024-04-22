let im=document.querySelector("#im");
let btn1=document.querySelector("#btn1");
let btn2=document.querySelector("#btn2");
let btn3=document.querySelector("#btn3");
let btn4=document.querySelector("#btn4");
document.querySelector("#btn1").onclick=()=>{
    im.innerHTML="<img src='barca.jpg' width=100px>";
    im.style.transform="rotateY(-180deg)";
    im.style.transition="all 0.5s linear";
    im.style.transitionStyle="preserve-3d";
    im.style.backfaceVisibility="hidden";
    
    setTimeout(() => {
      im.style.transform="rotate(0deg)"
    im.style.transform="all 0.5s linear";
    }, 250);




  document.querySelector("#btn2").onclick=()=>{
    im.innerHTML="<img src='uno.jpg' width=100px>";
  im.style.transform="rotateY(-180deg)";
    im.style.transition="all 0.5s linear";
    im.style.transitionStyle="preserve-3d";
    im.style.backfaceVisibility="hidden";
    
    setTimeout(() => {
      im.style.transform="rotate(0deg)"
    im.style.transform="all 0.5s linear";
    }, 250);




  document.querySelector("#btn3").onclick=()=>{
    im.innerHTML="<img src='golden.jpg' width=100px>";
   im.style.transform="rotateY(-180deg)";
    im.style.transition="all 0.5s linear";
    im.style.transitionStyle="preserve-3d";
    im.style.backfaceVisibility="hidden";
    
    setTimeout(() => {
      im.style.transform="rotate(0deg)"
    im.style.transform="all 0.5s linear";
    }, 250);


    
  document.querySelector("#btn4").onclick=()=>{
    im.innerHTML="<img src='ney.jpg' width=100px>";
  
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
}
}




