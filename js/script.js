let btn1 = document.querySelector(".btn1");
let inputbox = document.querySelector(".inputbox");
let result = document.querySelector(".result");
let images = document.querySelector(".images");

btn1.addEventListener("click",function () {
    if (inputbox.value >= 18) {
        result.innerHTML = "you can vote"
        images.src ="./images/vote.jpg"
    }else if(inputbox.value >= 80 || inputbox.value <= 100){
        result.innerHTML = "you are last stage";
        images.src ="./images/baby.jpg";
        console.log("you are aged");
    }else if (inputbox.value > 101 ){
        result.innerHTML = "your vote is done"
    }
    
})
