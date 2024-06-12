let btn = document.getElementById('toggleBtn');
let bulb = document.getElementById('bulb');
btn.addEventListener('click' , toggleBulb);

function toggleBulb(e){
    if(btn.textContent.includes('ON')){
        bulb.src= "../images/hello.png";
        btn.textContent="Turn OFF";
    }
    else{
        bulb.src= "../images/bye.png";
        btn.textContent="Turn ON";
    }
}
