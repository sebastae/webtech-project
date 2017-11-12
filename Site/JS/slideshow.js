const bilder = [
    "img/annie-spratt-42459.jpg",
    "img/erol-ahmed-80094.jpg",
    "img/matthew-smith-5935.jpg",
    "img/pexels-photo-612807.jpeg"
];

let imgTag = document.querySelector("#imgTag");
let index = 0;
let sekunder = 5000;

//Changes the picture by changing the source of the <img>-tag
//Makes sure the index also always points to an image
function slide(){
    imgTag.src = bilder[index];
    index = (index+1)%(bilder.length);
}

//One slide forward, and slows down the interval
function forward(){
    clearInterval(inter_vall);
    sekunder = 10000;
    slide();
}

//One slide backwards, and slows down the interval
function backward(){
    clearInterval(inter_vall);
    sekunder = 10000;
    if (index == 0){
        index = (bilder.length-1);
    }
    else {
        index--;
    }
    imgTag.src = bilder[index]; 
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
let inter_vall = setInterval(slide,sekunder);
