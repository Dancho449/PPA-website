 const writeUps = document.querySelectorAll(".write-up");
const vmvContainer = document.querySelectorAll(".vmv-container");
const body = document.querySelector(".body");
const comeUps = document.querySelectorAll(".come-up");


for(i = 0; i < vmvContainer.length; i++){
    vmvContainer[i].addEventListener('click', function(e){
        this.classList.toggle("display");
})}

for(i = 0; i < vmvContainer.length; i++){
    vmvContainer[i].addEventListener('mouseenter', function(e){
        this.classList.toggle("display");
    })
}
for(i = 0; i < vmvContainer.length; i++){
    vmvContainer[i].addEventListener('mouseleave', function(e){
        this.classList.toggle("display");
    })
}

window.addEventListener('scroll', function(){
    var triggerBottom = window.innerHeight 
    vmvContainer.forEach(vmvContaine => {
        var containerTop = vmvContaine.getBoundingClientRect().top;
        if( containerTop < triggerBottom){
            vmvContaine.classList.add('reveal')
        }else{
            vmvContaine.classList.remove('reveal')
        }
        
    })
});

window.addEventListener('scroll', function(){
    var triggerBottom = window.innerHeight
    comeUps.forEach(comeUp => {
        var containerTop = comeUp.getBoundingClientRect().top;
        if( containerTop < triggerBottom){
            comeUp.classList.add('revealname')
        }else{
            comeUp.classList.remove('revealname')
        }
    })

})
//PPA calender js
const jan = document.querySelector(".jan");
const janText = document.querySelector("#jan-text");
const elongate = document.querySelector("#elongate"); //this is the li making the width longer
const elongateOne = document.querySelector("#elongate-one"); 
const elongateTwo = document.querySelector("#elongate-two"); 
const elongateThree = document.querySelector("#elongate-three"); 
const elongateFour = document.querySelector("#elongate-four"); 
const elongateFive = document.querySelector("#elongate-five"); 

jan.addEventListener('click', function(){
    janText.classList.toggle("showanchor");
    elongate.classList.toggle("showanchor");
});

const feb = document.querySelector(".feb");
const febText =document.querySelector("#feb-text");

feb.addEventListener("click", function(){
    febText.classList.toggle("showanchor");
    elongateOne.classList.toggle("showanchor");
});

const mar = document.querySelector(".mar");
const marText =document.querySelector("#mar-text");

mar.addEventListener("click", function(){
    marText.classList.toggle("showanchor");
    elongateTwo.classList.toggle("showanchor");
});

const apr = document.querySelector(".apr");
const aprText =document.querySelector("#apr-text");

apr.addEventListener("click", function(){
    aprText.classList.toggle("showanchor");
    elongateThree.classList.toggle("showanchor");
});

const may = document.querySelector(".may");
const mayText =document.querySelector("#may-text");

may.addEventListener("click", function(){
    mayText.classList.toggle("showanchor");
    elongateFour.classList.toggle("showanchor");
});
const june = document.querySelector(".june");
const juneText = document.querySelector("#june-text");

june.addEventListener("click", function(){
    juneText.classList.toggle("showanchor");
    elongateFive.classList.toggle("showanchor");

})


const unavailables = document.querySelectorAll(".unavailable");

unavailables.forEach(function(unavailable){
    unavailable.addEventListener("click", function(){
        alert  ("Not Available Yet!")
    })
})










       