let popup = document.getElementById('popup');

function openPopup(){
    popup.classList.add("open_popup");
    console.log(openPopup);
}
function closePopup(){
    popup.classList.remove("open_popup");
    console.log('popup hide');
}