let a =document.querySelector("#a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");
let va =document.querySelector("#va");
let vb = document.querySelector("#vb");
let vc = document.querySelector("#vc");
va.innerHTML = a.value;
  a.oninput =()=>{
  va.innerHTML= a.value;
  let n= parseInt(a.value);
  }
  vb.innerHTML = b.value;
  b.oninput =()=>{
  vb.innerHTML= b.value;
  let m= parseInt(b.value);
  
  }
  vc.innerHTML = c.value;
  c.oninput =()=>{
  vc.innerHTML= c.value;
  let m= parseInt(c.value);
  
  
  
}