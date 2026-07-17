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


/*
document.querySelector(".map").addEventListener("click",(e)=>{

    const rect = e.currentTarget.getBoundingClientRect();

    const left =
    ((e.clientX - rect.left) / rect.width * 100).toFixed(1);

    const top =
    ((e.clientY - rect.top) / rect.height * 100).toFixed(1);

    alert(`top:${top}%; left:${left}%;`);

});
*/