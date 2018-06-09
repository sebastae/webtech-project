"use strict";

const form = document.forms[0];

const email = form.elements.email;
const fname = form.elements.firstname;
const lname = form.elements.lastname;
const message = form.elements.message;
const errormsg = document.getElementById("errormsg");
const btn = document.getElementById("btn");
let missing = false;

btn.addEventListener("click", e=>{
    e.preventDefault();

    missing = false;

    checkField(email);
    checkField(fname);
    checkField(lname);
    checkField(message);

    if(missing){
        errormsg.innerText = "Some field(s) are missing!";
    } else{
        errormsg.innerText = "";
        form.submit();
    }


});

function checkField(elem){
    if(elem.value === "" || elem.value===null){
        missing = true;
        elem.style.borderColor = "red";
    } else {
        elem.style.borderColor = "#aaa";
    }
}
