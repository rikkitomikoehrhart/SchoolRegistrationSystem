"use strict";

/*
   SchoolRegistationSystem

   Author: Rikki Tomiko Ehrhart
   Date:   04.28.24

   Filename: fetchdata.js

   =========
   This file fetchs the data

*/
/************* STUDENT CLASS *************/
class Student {
    constructor(studentId, name, email, password, mw8, mw10, mw1, mw3, tt8, tt10, tt1, tt3, fr8, fr1, st8, st1, su8, su1) {
        this.studentId = studentId;
        this.name = name;
        this.email = email;
        this.password = password;
        this.mw8 = mw8;
        this.mw10 = mw10;
        this.mw1 = mw1;
        this.mw3 = mw3;
        this.tt8 = tt8;
        this.tt10 = tt10;
        this.tt1 = tt1;
        this.tt3 = tt3;
        this.fr8 = fr8;
        this.fr1 = fr1;
        this.st8 = st8;
        this.st1 = st1;
        this.su8 = su8;
        this.su1 = su1;
    }
}




/************* GLOBAL VARIABLES **************/
const url = `https://script.google.com/macros/s/AKfycbxhq_8hTF33TpHvFeWSrji9w5BbgjzDMjWqceRvbbQaj9eDFSJ_M8dsN1Yjk994XAiR1A/exec`
var students = [];

let sheetData = [
    fetch(`${url}`)
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
        var student = new Student(data[0][i][0], data[0][i][1], data[0][i][2], data[0][i][3], data[0][i][4], data[0][i][5], data[0][i][6], data[0][i][7], data[0][i][8], data[0][i][9], data[0][i][10], data[0][i][11], data[0][i][12], data[0][i][13], data[0][i][14], data[0][i][15], data[0][i][16], data[0][i][17])
        console.log(student)
        students.push(student);
    }

}