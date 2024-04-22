var spinner=document.querySelector("#spinner");
document.querySelector("#btnver").onclick=()=>{
  spinner.innerHTML="<img src='hola.gif'>";
  setTimeout(()=>{
    spinner.innerHTML="<h1>HOLA!!</h1>";
  },1000);
}