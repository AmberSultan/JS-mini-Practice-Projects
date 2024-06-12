let qrText = document.getElementById('qrText');
let imageBox = document.getElementById('imageBox');
let qrImage = document.getElementById('qrImage');

function generateQR(){
    if (qrText.value === ""){
        alert("Please Enter URL");
        qrImage.src = "";
        imageBox.classList.add('hideBorder');
    } else {
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
        imageBox.classList.remove('hideBorder');
    }
}

function downloadQR(){
    if (qrText.value === "") {
        alert("Please Enter URL and then download the QR Code");
        console.log('download');
    } else {
        let link = document.createElement('a');
        link.href = qrImage.src;
        link.download = "qrCode.png";
        link.click();
        console.log('download');
    }
}
