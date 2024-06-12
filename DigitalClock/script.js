let time = document.getElementById('time');
let format = document.getElementById('format');

document.addEventListener('DOMContentLoaded', ()=>
{
    setInterval(showTime , 1000);  //1000 means that every 1s our value will changed.
});

const showTime = () => {
    let date = new Date();

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

     // Setting time for 12 Hrs format   //if we don't want 12 Hrs format just remove this if-else statement
     if (hr >= 12) {
        if (hr > 12) hr -= 12;
       
    } else if (hr == 0) {
        hr = 12;
   
    }


    //these all apply to add 0 before 1 to 9 values
    hr = hr<10 ? `0${hr}` : hr;         
    min = min<10 ? `0${min}` : min;
    sec = sec<10 ? `0${sec}` : sec;


    time.innerHTML = `${hr} : ${min} : ${sec}` ;

    format.innerHTML = hr<12 ? "PM" : "AM";
}
