let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let inputbox = document.querySelector(".inputbox");
let result = document.querySelector(".result");
let images = document.querySelector(".images");

btn1.addEventListener("click",function () {
    if (inputbox.value >= 18 && inputbox.value < 80) {
        result.innerHTML = "You can vote";
        images.src ="./images/vote.jpg";
    }else if(inputbox.value >= 80 && inputbox.value <= 100){
        result.innerHTML = "You are last stage";
        images.src ="./images/last_stage.jpg";
        console.log("you are aged");
    }else if (inputbox.value >= 101 ){
        result.innerHTML = "Congratuation, your vote is done";
        images.src ="./images/nowka.png";
    }else if (inputbox.value < 18 ) {
        result.innerHTML = " child you can't vote go home ";
        console.log("you are child");
        images.src ="./images/baby.jpg";
    }
    
})

btn2.addEventListener("click",function () {
    inputbox.value = "";
    result.innerHTML = "";
    images.src ="./images/white.jpg";
})
