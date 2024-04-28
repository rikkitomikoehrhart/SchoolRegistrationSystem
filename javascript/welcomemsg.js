"use strict";

/*
   SchoolRegistationSystem

   Author: Rikki Tomiko Ehrhart
   Date:   04.28.24

   Filename: welcomemsg.js

   =========
   This file handles the welcome message for the user logging in

*/



/************* GLOBAL VARIABLES **************/
const url = `https://script.google.com/macros/s/AKfycbzET7Xeq_rdEtctZuXanHm2NmmJxIq0B63A_jZTv0TGqCSgDLVUl_A4rI7H-DqKCUZnPw/exec`
var studentIds
var studentNames
let sheetData = [
    fetch(`${url}?header=student_id`),
    fetch(`${url}?header=name`),
]


/************* ONLOAD WINDOW FUNCTION *************/
window.onload = function() {
    /******* PULL DATA *******/
    pullData();

}



/************* PULLDATA FUNCTION *************/
async function pullData() {
    const response = await Promise.all(sheetData);
    const data = await Promise.all(response.map((item) => {
        return item.json();
    }))
    
    for (var i = 0; i < data[0].data.length; i++) {
        console.log(`Student ` + data[0].data[i] + `: ` + data[1].data[i])
    }
}