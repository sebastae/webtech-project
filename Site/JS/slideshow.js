const bilder = [
    "img/slideshow/slideshow1_1920.jpg",
    "img/slideshow/slideshow2_1920.jpg",
    "img/slideshow/slideshow5_1920.jpg",
    "img/slideshow/slideshow6_1920.jpg",
    "img/slideshow/slideshow9_1920.jpg",
    "img/slideshow/slideshow10_1920.jpg",
    "img/slideshow/slideshow12_1920.jpg",
    "img/slideshow/slideshow13_1920.jpg",
    "img/slideshow/slideshow16_1920.jpg",
    "img/slideshow/slideshow17_1920.jpg",
    "img/slideshow/slideshow18_1920.jpg",
    "img/slideshow/slideshow4_1920.jpg"
];


let imgTag = document.querySelector("#imgTag");
let index = 0;

//Changes the picture by changing the source of the <img>-tag
//Makes sure the index also always points to an image
function slide(){
        index = (index+1)%(bilder.length);
        imgTag.src = bilder[index];
}

//One slide forward, and slows down the interval
function forward(){
    clearInterval(inter_vall);
    slide();
}

//One slide backwards, and slows down the interval
function backward(){
    clearInterval(inter_vall);
    if (index == 0){
        index = (bilder.length-1);
    }
    else {
        index--;
    }
    fadeOut();
    setTimeout(function(){
        imgTag.src = bilder[index];
        fadeIn();
    }, 200);
}

//Saves images in an array so they won't be removed from RAM
let images = [];
function preload(bilder) {
    //Loops through the array and adds the images to the new array for preloading
    for (let i = 0; i < bilder.length; i++) {
        images[i] = new Image();
        images[i].src = bilder[i];
    }
}

//Runs the preload function and creates an interval varable, to easily create intervals in the future.
preload(bilder);
let inter_vall = setInterval(slide,5000);
