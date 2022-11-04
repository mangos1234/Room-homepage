var menubtn = document.getElementById("menu");
var logo = document.getElementById("logo");
var hamburger = document.getElementById("hamburger");
var closebtn = document.getElementById("closebtn");
var container = document.querySelector(".container");

function openmenu(){
    menubtn.style.display = "flex";
    logo.style.display = "none";
    closebtn.style.display = "flex";
    hamburger.style.display = "none";
    container.style.padding = "0";
}

function closemenu(){  
    menubtn.style.display = "none"
    logo.style.display = "block"
    closebtn.style.display = "none";
    hamburger.style.display = "block";
    container.style.padding = "5% 5%";
}

var mobilearrowsNext = document.querySelector("#next");
var mobilearrowsPrev = document.querySelector("#prev");
var laptoparrowsNext = document.querySelector("#next2")
var laptoparrowsPrev = document.querySelector("#prev2")
var picture = document.querySelector("header");
var title = document.querySelector(".titleToChange");
var para = document.querySelector(".paraToChange");

var mobilebackgrounds = ["url(./images/mobile-image-hero-1.jpg) no-repeat center center/cover", "url(./images/mobile-image-hero-2.jpg) no-repeat center center/cover", "url(./images/mobile-image-hero-3.jpg) no-repeat center center/cover"]
var laptopbackgrounds = ["url(./images/desktop-image-hero-1.jpg) no-repeat center center/cover", "url(./images/desktop-image-hero-2.jpg) no-repeat center center/cover", "url(./images/desktop-image-hero-3.jpg) no-repeat center center/cover"]
var titles = ["Discover innovative ways to decorate", "We are available all across the globe", "Manufactured with the best materials"]
var paras = ["We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.", "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.", "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."]

let slidePosition = 0;

function prev(mobile){
    console.log("prev");
    if(slidePosition === 0)
    {
        slidePosition = 2;
    }
    else{
        slidePosition--;
    }
    console.log(slidePosition);

    if(mobile){
       updateSlidePos() 
    }
    else{
        updateSlidePos2()
    }
    
    
}

function next(mobile){
    console.log("next");
    if(slidePosition === 2)
    {
        slidePosition = 0;
    }
    else
    {
        slidePosition++;
    }
    console.log(slidePosition);
    
    if(mobile){
        updateSlidePos() 
     }
     else{
         updateSlidePos2()
     }
}

function updateSlidePos(){
    console.log("update");
    picture.style.background = mobilebackgrounds[slidePosition];
    updateText();
}

function updateSlidePos2(){
    console.log("update");
    picture.style.background = laptopbackgrounds[slidePosition];
    updateText();
}

function updateText(){
    title.textContent = titles[slidePosition];
    para.textContent = paras[slidePosition];
}

