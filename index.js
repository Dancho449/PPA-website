const btn = document.querySelector(".hamburger");

const container = document.querySelector(".side-menu");

const clear = document.querySelector(".sidebar-clear");

const head = document.querySelector("header");

const reveal = document.querySelectorAll(".holder")

btn.addEventListener('click', function() {
    container.style.display = "block"
})

clear.addEventListener('click', function() {
    container.style.display = "none"
})

window.addEventListener('click', function(e) {
    if(e.target === container || e.target === head) {
        container.style.display = "none"
    }
})

for(i = 0; i < reveal.length; i++) {
    reveal[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}