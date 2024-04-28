"use strict";

/*
   SchoolRegistationSystem

   Author: Rikki Tomiko Ehrhart
   Date:   04.28.24

   Filename: fetchdata.js

   =========
   This file fetchs the data

*/


/************* GLOBAL VARIABLES **************/
const url = `https://script.google.com/macros/s/AKfycbzET7Xeq_rdEtctZuXanHm2NmmJxIq0B63A_jZTv0TGqCSgDLVUl_A4rI7H-DqKCUZnPw/exec`
var studentIds = [];
var studentNames = [];
var studentEmails = [];
var studentPasswords = [];
let sheetData = [
    fetch(`${url}?header=student_id`),
    fetch(`${url}?header=name`),
    fetch(`${url}?header=email`),
    fetch(`${url}?header=password`),
];


/************* ONLOAD WINDOW FUNCTION *************/
window.onload = main()


/************* MAIN FUNCTION *************/
async function main() {
    // Pull the data from Google Sheets
    const response = await Promise.all(sheetData);
    const data = await Promise.all(response.map((item) => {
        return item.json();
    }))



    for (var i = 0; i < data[0].data.length; i++) {
        studentIds.push(data[0].data[i])
        studentNames.push(data[1].data[i])
        studentEmails.push(data[2].data[i])
        studentPasswords.push(data[3].data[i])
        console.log(`${data[0].data[i]} ${data[1].data[i]} ${data[2].data[i]} ${data[3].data[i]}`)
    }

}