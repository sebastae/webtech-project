"use strict";

let loaded_JSON_files = [];

function JSONLoader(file, template, callback){
    let request = new XMLHttpRequest;

    request.open("GET", file);
    request.onreadystatechange = function(){
        if(request.readyState === 4){
            if(request.status === 200 || request.status === 0){
                let parsedJSON = JSON.parse(request.responseText);
                loaded_JSON_files.push(parsedJSON);
                renderTemplate(parsedJSON, template, callback);
            }
        }
    }
    request.send();
}

function renderTemplate(content, template, callback){
    let request = new XMLHttpRequest;

    request.open("GET", template);
    request.onreadystatechange = () =>{
        if(request.readyState === 4){
            if (request.status === 200 || request.status === 0){
                let parsedTemplate = parseTemplate(content, request.responseText);
                callback(parsedTemplate);
            }
        }
    }
    request.send();
}

function parseTemplate(content, template){
    let ptrn = new RegExp(/{{\s*([a-z.]+)\s*}}/, "g");
    let pairs = []
    let match;
    while((match = ptrn.exec(template)) != null){
        let mObj = new function(){
            this.matchstring = match[0];
            this.content = eval("content." + match[1]);
        }
        pairs.push(mObj);
    }

    for (let p of pairs){
        template = template.replace(p.matchstring, p.content);
    }

    let d = document.createElement("div");
    d.innerHTML = template;
    return template;    // Turns the string "template" into a DOM object
}

let containers = document.querySelectorAll("[data-fr-list]");
for (let c of containers){
    let alist = c.getAttribute("data-fr-list");
    let template = c.getAttribute("data-fr-template");
    template = template===null?"default":template;
    let r = new XMLHttpRequest();

    r.open("GET", "../Articles/" + alist.trim() + ".json");
    r.onreadystatechange = function(){
        if (r.readyState === 4){
            if(r.status === 200 || r.status === 0){
                let list = JSON.parse(r.responseText);
                for (let a of list.articles){
                    JSONLoader("../Articles/" + a, "../templates/" + template.trim() + ".html", function(content){
                        let div = document.createElement("div");
                        div.id = a.substr(0, a.length-5);
                        div.innerHTML = content;
                        c.appendChild(div);
                    });
                }
            }
        }
    }
    r.send();
}

let article_containers = document.querySelectorAll("[data-fr-article]");
for (let a of article_containers){
    let article_name = a.getAttribute("data-fr-article");
    let template = a.getAttribute("data-fr-template");
    template = template===null?"default":template;

    JSONLoader("../Articles/" + article_name.trim() + ".json", "../templates/" + template.trim() + ".html", function(content){
        a.innerHTML = content;
    });
}