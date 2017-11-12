"use strict";

var srotedBy = '';

function getAllCards() {
    let li = [];
    while (document.getElementById('galart').innerHTML !== '') {
        let memID = document.querySelector('.loaded-article').id
        let memContent = document.getElementById('galart').firstChild.innerHTML
        document.getElementById('galart').removeChild(document.getElementById(memID))
        let obj = {
            id: memID,
            content: memContent
        }
        li.push(obj)
    }
    return li
}

function printAllCards(li) {
    for (let i in li){
        document.getElementById('galart').insertAdjacentHTML('afterbegin', '<div id="'+li[i].id+'" class="loaded-article">'+li[i].content+'</div>')
    }
}

function sortByReverse() {
    let li = getAllCards()
    printAllCards(li)
}

function sortByName() {
    if (srotedBy === 'name') {
        sortByReverse()
    }
    else {
        let li = getAllCards()
        let sortedList = []
        while (li.length > 0) {
            let mem = -1;
            let num = '';
            for (let i in li) {
                if (li[i].id > num) {
                    num = li[i].id
                    mem = i
                }
            }
            sortedList.push(li[mem])
            li.splice(mem, 1);
        } 
        printAllCards(sortedList)
        srotedBy = 'name'
    }
}


function sortByPrice() {
    if (srotedBy === 'price') {
        sortByReverse()
    }
        else {
        let li = getAllCards()
        for (let i in li) {
            loadSortJSON("./Articles/"+li[i].id+".json", function(response) {
                let sortElement = JSON.parse(response);
                li[i].price = sortElement.body.price; 
            }); 
        }
        sortByPricePartTwo(li)
    }
}   

function sortByPricePartTwo(li) {
    let sortedList = []
    while (li.length > 0) {
        let mem = -1;
        let num = '';
        let pri = 0;
        for (let i in li) {
            if (li[i].price > pri) {
                num = li[i].id
                pri = li[i].price
                mem = i
                
            }
        }
        sortedList.push(li[mem])
        li.splice(mem, 1);
    } 
    printAllCards(sortedList)
    srotedBy = 'price'
}

function loadSortJSON(file, callback) {   
        let sortAdd = new XMLHttpRequest();
        sortAdd.overrideMimeType("application/json");
        sortAdd.open('GET', file, false);
        sortAdd.onreadystatechange = function () {
              if (sortAdd.readyState == 4 && sortAdd.status == "200") {
                callback(sortAdd.responseText);
              }
        };
        sortAdd.send(null);  
     }
     
