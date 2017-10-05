"use strict";

let loaded_JSON_files = [];

function JSONLoader(file, rendermethod){
    let request = new XMLHttpRequest;

    request.open("GET", file);
    request.onreadystatechange = function(){
        if(request.readyState === 4){
            if(request.status === 200 || request.status === 0){
                let parsedJSON = JSON.parse(request.responseText);
                loaded_JSON_files.push(parsedJSON);
                rendermethod(parsedJSON);
            }
        }
    }
    request.send();
}

JSONLoader("/Articles/test.json", out => console.log(out.head.text));
JSONLoader("/Articles/test_2.json", out => console.log(out.head.text));