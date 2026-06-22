const popup =
document.getElementById("popup");

const popupImage =
document.getElementById("popupImage");

const popupTitle =
document.getElementById("popupTitle");

function showPopup(event,title,image){

    popup.style.display = "block";

    popupImage.src = image;

    popupTitle.innerText = title;

    function showPopup(event,title,image){

    popup.style.display = "block";

    popupImage.src = image;

    popupTitle.innerText = title;

}

}

function hidePopup(){

    popup.style.display = "none";

}