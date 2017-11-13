"use strict";

let sortedBy = '';

// Collects all the cards in the gallery and, and saves the content in objects in a list,
// while separating relevant information like ID and Price. 
function getAllCards() {
    let li = [];
    while (document.getElementById('galart').innerHTML !== '') {
        let memID = document.querySelector('.loaded-article').id
        let memPrice = document.querySelector('.card_sml_price').innerHTML
        memPrice = parseInt(memPrice)
        let memContent = document.getElementById('galart').firstChild.innerHTML
        document.getElementById('galart').removeChild(document.getElementById(memID))
        let obj = {
            id: memID,
            content: memContent,
            price: memPrice
        }
        li.push(obj)
    }
    return li
}

// Gets a list with objects and prints them to the gallery
function printAllCards(li) {
    for (let i in li){
        document.getElementById('galart').insertAdjacentHTML('afterbegin', '<div id="'+li[i].id+'" class="loaded-article">'+li[i].content+'</div>')
    }
}

// Removes all the cards and prints them back in reverse order
function sortByReverse() {
    let li = getAllCards()
    printAllCards(li)
}

// Uses getAllCards() to collect all the cards to a list with objects, including the relevant information.
// Sorts the objects in the list by the ID of the objects
// Changes the global variable "sortedBy" to "name", so if the cards already is sorted
// alphabetically, it reverses the list.
function sortByName() {
    if (sortedBy === 'name') {
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
        sortedBy = 'name'
    }
}

// Uses getAllCards() to collect all the cards to a list with objects, including the relevant information.
// Sorts the objects in the list by the Price of the objects
// Changes the global variable "sortedBy" to "price", so if the cards already is sorted
// price, it reverses the list.
function sortByPrice() {
    if (sortedBy === 'price') {
        sortByReverse()
    }
    else {
        let li = getAllCards()
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
        sortedBy = 'price'
    }
    
}