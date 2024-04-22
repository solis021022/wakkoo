let fil =document.querySelector("#fil")
let col = document.querySelector("#col")
let vf = document.querySelector("#vf")
let vc =document.querySelector("#vc")
let cp = document.querySelector("#cp")
let ci= document.querySelector("#ci")

fil.oninput = () => {
hacer();

}
col.oninput = () => {
generar();
}
cp.onchange= () => { hacer(); }
ci.onchange = () => { hacer(); }
const hacer = () => {
let f = parseInt(fil.value);
let c = parseInt(col.value);
vf.innerHTML = f;
vc.innerHTML = c;
tabla = "<table>";
for (i = 1; i <= f; i++) {
    color = (i % 2 == 0) ? cp.value : ci.value;
    tabla += "<tr bgcolor='" + color + "'>"
    for (j = 1; j <= c; j++) {
    tabla += "<td>  solis </td>";
    }
    tabla += "</tr>";
}
document.querySelector("#res").innerHTML = tabla;
}


