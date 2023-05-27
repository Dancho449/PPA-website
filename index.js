const btn = document.querySelector(".hamburger");

const container = document.querySelector(".side-menu");

const clear = document.querySelector(".navbar-clear");

btn.addEventListener('click', function() {
    container.style.display = "block"
})

clear.addEventListener('click', function() {
    container.style.display = "none"
})

window.addEventListener('click', function(e) {
    if(e.target === container) {
        container.style.display = "none"
    }
})