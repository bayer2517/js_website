// Menu section


document.querySelector("#open-nav-menu").addEventListener("click",function(){
    document.querySelector("header nav .wrapper").classList.add("nav-open");
});


document.querySelector("#close-nav-menu").addEventListener("click",function(){
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
});


// Greeting section

const greetingText = "Good Morning";
const weatherCondition = "sunny";
const userLocation = "Moscow";
let tempature = 22.867;
let weatherText = `The weather is ${weatherCondition} in ${userLocation} and it's ${tempature.toFixed()}°C outside.`;

document.querySelector("#greeting").innerHTML = greetingText;
document.querySelector("p#weather").innerHTML = weatherText;