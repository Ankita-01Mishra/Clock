setInterval(() =>{
let dt=new Date();
let hr=dt.getHours();
let mi=dt.getMinutes();
let se=dt.getSeconds();

// document.getElementById("hours").innerHTML = hr;
document.getElementById("minutes").innerHTML = mi;
document.getElementById("second").innerHTML = se;


// if(hr>=18 ){
//     document.getElementById("msg1").innerHTML="nap"
// }
// setTimeout()
if(hr>12){
    hr=hr-12;
    document.getElementById("ap").innerHTML="PM"
    
}
else{
    document.getElementById("ap").innerHTML="AM"
}
document.getElementById("hours").innerHTML = hr;

if(hr>=6 && ap.innerHTML=='PM')
document.getElementById("msg1").innerHTML="Nap Time";

},1000)

console.log(hr);

