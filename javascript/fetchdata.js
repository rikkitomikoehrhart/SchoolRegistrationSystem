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

const options = {
    "action": "read"
}

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

    console.log(data[0][1])

    for (var i = 1; i < data[0].length; i++) {
        var student = new Student(data[0][i][0], data[0][i][1], data[0][i][2], data[0][i][3], data[0][i][4], data[0][i][5], data[0][i][6], data[0][i][7], data[0][i][8], data[0][i][9], data[0][i][10], data[0][i][11], data[0][i][12], data[0][i][13], data[0][i][14], data[0][i][15], data[0][i][17], data[0][i][17])
        console.log(student)
        students.push(student);
    }


    // for (var i = 0; i < data[0].data.length; i++) {
    //     // Names (0)
    //     studentNames.push(data[0].data[i])
        
    //     // Emails (1)
    //     studentEmails.push(data[1].data[i])
        
    //     // Passwords (2)
    //     studentPasswords.push(data[2].data[i])
        
    //     // MW 8 (3), 10 (4), 1 (5), 3 (6)
    //     if (data[3].data[i]) {
    //         mw8.push(true)
    //     } else {
    //         mw8.push(false)
    //     }

    //     if (data[4].data[i]) {
    //         mw10.push(true)
    //     } else {
    //         mw10.push(false)
    //     }

    //     if (data[5].data[i]) {
    //         mw1.push(true)
    //     } else {
    //         mw1.push(false)
    //     }

    //     if (data[6].data[i]) {
    //         mw3.push(true)
    //     } else {
    //         mw3.push(false)
    //     }

    //     // TT 8 (7), 10 (8), 1 (9), 3 (10)
    //     if (data[7].data[i]) {
    //         tt8.push(true)
    //     } else {
    //         tt8.push(false)
    //     }

    //     if (data[8].data[i]) {
    //         tt10.push(true)
    //     } else {
    //         tt10.push(false)
    //     }

    //     if (data[9].data[i]) {
    //         tt1.push(true)
    //     } else {
    //         tt1.push(false)
    //     }

    //     if (data[10].data[i]) {
    //         tt3.push(true)
    //     } else {
    //         tt3.push(false)
    //     }

    //     // FR 8 (11), 1 (12)
    //     if (data[11].data[i]) {
    //         fr8.push(true)
    //     } else {
    //         fr8.push(false)
    //     }

    //     if (data[12].data[i]) {
    //         fr1.push(true)
    //     } else {
    //         fr1.push(false)
    //     }

    //     // ST 8 (13), 1 (14)
    //     if (data[13].data[i]) {
    //         st8.push(true)
    //     } else {
    //         st8.push(false)
    //     }
        
    //     if (data[14].data[i]) {
    //         st1.push(true)
    //     } else {
    //         st1.push(false)
    //     }


    //     // SU 8 (15), 1 (16)
    //     if (data[15].data[i]) {
    //         su8.push(true)
    //     } else {
    //         su8.push(false)
    //     }
        
    //     if (data[16].data[i]) {
    //         su1.push(true)
    //     } else {
    //         su1.push(false)
    //     }





    //     console.log(`${data[0].data[i]} ${data[1].data[i]} ${data[2].data[i]}`)

    // }

    // console.log(mw8)
    // console.log(mw10)
}