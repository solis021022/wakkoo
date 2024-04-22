console.log("hola mundo");

const suma =()=>{
  let n1 = parseInt(document.querySelector("#num1").value);
  let n2 = parseInt(document.querySelector("#num2").value);
  let suma=n1+n2;
  document.querySelector("#res").innerHTML=n1+n2;
}