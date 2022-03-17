function Calcular() { 
    var vr1 = document.getElementById('t1').value; 
    var vr2 = document.getElementById('t2').value; 
     
    var p = (parseFloat(vr1)+parseFloat(vr2))/2; document.getElementById('promedio').innerHTML = p; 
    var p3 = (parseFloat(vr1)+parseFloat(vr2)); document.getElementById('total').innerHTML = p3;
if (vr1 === vr2) {
    alert("Los nuneros son igules")

}
// else(){
//     alert("Los nuneros son igules")

// }

}