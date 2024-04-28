// Menu section

// Greeting section

document.querySelector("#open-nav-menu").addEventListener("click",function(){
    document.querySelector("header nav .wrapper").classList.add("nav-open");
});


document.querySelector("#close-nav-menu").addEventListener("click",function(){
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
});


const greetingText = "Good Morning";
const weatherCondition = "sunny";
const userLocation = "Moscow";
let tempature = 22.867;


document.querySelector("#greeting").innerHTML = greetingText;




//WEATHER BUTTON

let fahrText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFahr(tempature).toFixed()}°F outside.`;
let celsiumText = `The weather is ${weatherCondition} in ${userLocation} and it's ${tempature.toFixed()}°C outside.`;

document.querySelector("p#weather").innerHTML = celsiumText;

function celsiusToFahr(tempature) {
    let fahr = (tempature * 9/5) + 32;
    return fahr;
}

document.querySelector(".weather-group").addEventListener("click", function(event) { //execution conversion to fahr
    
    if (event.target.id == "celsius") { //celsium button
        document.querySelector("p#weather").innerHTML = celsiumText;
    } else if (event.target.id == "fahr") { //fahr button
        document.querySelector("p#weather").innerHTML = fahrText;;
    }
});


// Clock section 


setInterval(function(){
    let localTime = new Date();
    document.querySelector("span[data-time=hours]").textContent = localTime.getHours().toString().padStart(2,"0");
    document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes().toString().padStart(2,"0");
    document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds().toString().padStart(2,"0");
},1000);




// Gallery section 

const galleryImages = [
    {
        src: "./assets/gallery/image1.jpg",
        alt: "Thumbnail Image 1"
    },
        
    {   
        src: "./assets/gallery/image2.jpg",
        alt: "Thumbnail Image 2",
    },

    {   
        src: "./assets/gallery/image3.jpg",
        alt: "Thumbnail Image 3"
    }
];

/* for (let i in galleryImages) {
    console.log(galleryImages[i])
} */

// Default image when page loaded amd thumbnail image
let mainImage = document.querySelector('#gallery > img');
let thumbnails = document.querySelector('#gallery > .thumbnails')

mainImage.src = galleryImages[0].src;
mainImage.alt = galleryImages[0].alt;

// <img src="./assets/gallery/image1.jpg"
// alt="Thumbnail Image 1" 
// data-array-index="0" 
// data-selected="true"></img>



// Images selector 
galleryImages.forEach(function(image,index){
    let thumb = document.createElement("img");
    thumb.src = image.src;
    thumb.alt = image.alt
    thumb.dataset.arrayIndex = index;
    
    //This is regulat id else condition for selecting first image 
    //thumb.dataset.selected = false;
    
    /* if (index === 0){
        thumb.dataset.selected = true;
    }else {
        thumb.dataset.selected = false
    }
    
    thumbnails.appendChild(thumb); */

    // or use ternary condition

    thumb.dataset.selected = index === 0 ? true : false;  // condition ? do this : else do this
    
    thumbnails.appendChild(thumb);


}); 

