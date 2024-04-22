let rojo = document.querySelector("#rojo");
let vrojo = document.querySelector("#vrojo");
let verde = document.querySelector("#verde");
let vverde = document.querySelector("#vverde");
let azul = document.querySelector("#azul");
let vazul = document.querySelector("#vazul");
let hijo = document.querySelector("#hijo");
let res = document.querySelector("#res");
let valor = document.querySelector("#valoe");
let hexa = document.querySelector("#hexa");


vrojo.innerHTML = rojo.value;
  rojo.oninput= function(){
  vrojo.innerHTML= this.value;
  let a= parseInt(rojo.value);
  color();
  }
  
  vverde.innerHTML = verde.value;
  verde.oninput =function(){
  vverde.innerHTML=this.value;
  let b= parseInt(verde.value);
  color();
  }
 
 
 
  vazul.innerHTML = azul.value ;
  azul.oninput =function(){
  vazul.innerHTML= this.value;
  color();
  }
  
let c= parseInt(azul.value);
  
  
  
  
  
  
  function color() {

let a= parseInt(rojo.value);
  
let b= parseInt(verde.value);

let c= parseInt(azul.value);

  res.innerHTML=   "RGB" + "(" + a + "," + b + ","  + c + ")";
  
hexa.innerHTML="#"+convertirhexa(a)+convertirhexa(b)+convertirhexa(c);

hijo.style.backgroundColor="rgb("+ a + "," + b + ","  + c + ")";


}

function convertirhexa(valor){
let hexa=(valor>16)?valor.toString(16).toUpperCase():"0"+valor.toString(16).toUpperCase();
return hexa;
}