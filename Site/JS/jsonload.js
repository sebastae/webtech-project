"use strict";

let jfile = fetch("Articles/test.json"); // Async, uses Promise, same problem as before
console.log(jfile);

function jsonLoad(file){
    return new Promise(function(resolve, reject){
        let request = new XMLHttpRequest();

        request.open("GET", file);
        request.onreadystatechange = function(){
            if(request.readyState === 4){
                if(request.status === 200 || request.status === 0){
                    resolve(request.responseText);
                }
            }
        }
        request.onerror = function(){
            reject(Error("An error occured while trying to load a JSON file"));
        }
        request.send();
    });
}

function jsonParse(file){
    return jsonLoad(file).then(function(response){
        return JSON.parse(response);
    }, function(response){
        console.error(response);
    });
}

let j = jsonParse("./Articles/test.json");
console.log(j);

// Ideas:
// Load JSON into array when fetched, call function to render when article is loaded
// Only render those who haven't been rendered yet
// (check DOM for ID?)