document.addEventListener("DOMContentLoaded", function(){
    let popup = document.querySelector(".popup-wrap");
    let cross = document.querySelector(".cross");
    cross.addEventListener("click", function(){
        popup.style.display = "none";
    });
    window.addEventListener("click", function (e) {
        if(e.target == popup){
             popup.style.display = "none";
        }
    })

});