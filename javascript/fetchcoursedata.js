"use strict";

/*
   SchoolRegistationSystem

   Author: Rikki Tomiko Ehrhart
   Date:   04.28.24

   Filename: fetchstudentdata.js

   =========
   This file fetchs the data

*/
/************* STUDENT CLASS *************/
class Course {
    constructor(id, subject, name, description, online, registered, days, start, end) {
        this.id = id;
        this.subject = subject;
        this.name = name;
        this.description = description;
        this.online = online;
        this.registered = registered;
        this.days = days;
        this.start = start;
        this.end = end;
    }
}




/************* GLOBAL VARIABLES **************/
const courseUrl = `https://script.google.com/macros/s/AKfycbwECpYfETqlDGakb5M-p5wfS5SwQHAGkdxZDCQjOvOlleWI7pE2__qQPPqXvtZJrfavCQ/exec`
var courses = [];

let sheetData = [
    fetch(`${courseUrl}`)
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

    for (var i = 1; i < data[0].length; i++) {
        var courseObj = new Course(data[0][i][0], data[0][i][1], data[0][i][2], data[0][i][3], data[0][i][4], data[0][i][5], data[0][i][6], data[0][i][7], data[0][i][8])
        courses.push(courseObj);
    }

    console.log("completed")

}