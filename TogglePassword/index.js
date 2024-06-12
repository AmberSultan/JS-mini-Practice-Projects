let eyeicon = document.getElementById("icon");
let password = document.getElementById("password");

eyeicon.addEventListener('click', function(){
    if(password.type == "password"){
        password.type = "text";
        eyeicon.src="../images/show.png";
    }
    else{
        password.type = "password";
        eyeicon.src="../images/hide.png";
        
    }
})