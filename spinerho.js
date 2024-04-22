var spinner=document.querySelector("#spinner");
document.querySelector("#btnver").onclick=()=>{
  spinner.innerHTML="<img src='hola.gif' width=100px>";
  setTimeout(()=>{
    spinner.innerHTML="<h1>HOLA!!</h1>";
  },1000);
}
