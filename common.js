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

let hamburger = document.querySelector(".menu-burger__header");
let toggle_menu = document.querySelector(".menu-toggle");

hamburger.addEventListener("click", function () {
    toggle_menu.classList.toggle("show");
    hamburger.classList.toggle("is-active");
});