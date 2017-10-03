"use strict";
var XMLHttpRequest = require("xhr2")


function loadJSONFile(file){
    let rawFile = new XMLHttpRequest();

    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function(){
        console.log("Readystate: " + rawFile.readyState);
        if(rawFile.readyState === 4){
            if(rawFile.status === 200 || rawFile.status === 0){
                console.log(rawFile.responseText);
                return JSON.parse(rawFile.responseText);
            }
            
        }
    }
}
