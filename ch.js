var an= document.querySelector("#an");
var va= document.querySelector("#va");
var bn=document.querySelector("#bn");
var vb= document.querySelector("#vb");
var cn=document.querySelector("#cn");
var vc=document.querySelector("#vc");
var fac=document.querySelector("#fac");
let ecu=document.querySelector("#ecu");

an.oninput=()=> me();
bn.oninput=()=> me();
cn.oninput=()=> me();
fac.oninput=()=> me();
ecu.oninput=()=> me()
const me=()=>{
    let a=parseFloat(an.value);
    va.innerHTML=a;
    let b=parseFloat(bn.value);
    vb.innerHTML=b;
    let c= parseFloat(cn.value);
    vc.innerHTML=c;
    let R=fac;
    a2.innerHTML="";
    a3.innerHTML="";
    ecu.innerHTML="";
    var spinner=document.querySelector("#spinner");
    spinner.innerHTML="<img src='im.gif'>";
    setTimeout(()=>{


let ux=(((-1)*b));
let ux1=((Math.pow(b,2))-(4*a*c));
let ux2=(2*a);

let fx1=(ux-Math.sqrt(ux1))/ux2;
x1.innerHTML=fx1.toFixed(2);
let sa=(a>=0)?"+"+a:a;
let sb=(b>=0)?"+"+b:b;
let sc=(c>=0)?"+"+c:c;

ecu.innerHTML=sa+"x<sup>2</sup>"+sb+"x"+sc+"=0";



let dx=(ux+Math.sqrt(ux1))/ux2;
x2.innerHTML=dx.toFixed(2);

if (ux1==0) {
    R.textContent="Una solucion"
    let o=ux/ux2;
    x1.innerHTML="x="+o.toFixed(2);
    x2.innerHTML="";

}
else if(ux1>0){
    R.textContent="Dos soluciones"
    let dx=(ux+Math.sqrt(ux1))/ux2;
    let fx1=(ux-Math.sqrt(ux1))/ux2;
    x1.innerHTML="x1= "+dx.toFixed(2);
    x2.innerHTML="x2= "+fx1.toFixed(2);

}
else if(ux1<0){
    R.textContent="No hay solucion"
x1.innerHTML=" ";
x2.innerHTML=" ";

}


spinner.innerHTML="";

},1000);


      }
