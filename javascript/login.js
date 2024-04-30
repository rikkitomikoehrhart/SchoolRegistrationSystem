"use strict";

/*
   SchoolRegistationSystem

   Author: Rikki Tomiko Ehrhart
   Date:   04.28.24

   Filename: login.js

   =========
   This file pulls the data from the google sheets and saves them to 
   local storage and checks the username and password for the user

*/


/******************************************************************** 
*                        GLOBAL VARIABLES                           *
********************************************************************/
// The person logging in
var user;

// Grab the login container:
var loginBox = document.getElementById('login-box')

// Course Google Sheet
const courseUrl = `https://script.google.com/macros/s/AKfycbwECpYfETqlDGakb5M-p5wfS5SwQHAGkdxZDCQjOvOlleWI7pE2__qQPPqXvtZJrfavCQ/exec`
var courses = [];
let courseSheetData = [
    fetch(`${courseUrl}`)
];

// Student Google Sheet
const studentUrl = `https://script.google.com/macros/s/AKfycbxhq_8hTF33TpHvFeWSrji9w5BbgjzDMjWqceRvbbQaj9eDFSJ_M8dsN1Yjk994XAiR1A/exec`
var students = [];
let studentSheetData = [
    fetch(`${studentUrl}`)
];




/******************************************************************** 
*                     WINDOW ONLOAD FUNCTION                        *
********************************************************************/
window.onload = function() {
    /******* GRAB COURSE DATA *******/
    // Grab, then save to local storage then run main() to continue 
    // the functionality of the login screen
    getCourseData()
        .then(() => getStudentData())
        .then(() => saveToLocalStorage())
        .then(() => main())



    /******** LOGGIN REAPPEARS *******/



    // /******* LOGIN FUNCTIONALITY *******/
    // // Grab the log-in elements
    // var fullNameInput = document.getElementById('fullname');
    // var passwordInput = document.getElementById('password');
    // var loginButton = document.querySelector('#loginButton');
    // var resetButton = document.getElementById("resetButton")

    // // Declare some variables
    // var username = '';
    // var password = '';
    // var okToLogIn = false;

    // // Disable loginButton
    // loginButton.disabled = true;


    // // Validate email
    // fullNameInput.onchange = function() {
    //     if (fullNameInput.value) {
    //         for (var i = 0; i < students.length; i++) {
    //             if (fullNameInput.value == students[i].name) {
    //                 username = students[i].name;
    //                 user = students[i]
    //             }
    //         }
    //     }

    //     if (username === '') {
    //         window.alert("Your name is not in our system. Please try again. (Name is case sensitive)")
    //     } else {
    //         // Grab password
    //         passwordInput.onchange = function() {
    //             if (passwordInput.value) {
    //                 password = passwordInput.value
    //             }

    //             // Validate password:
    //             for (var p = 0; p < students.length; p++) {
    //                 if (username === students[p].name) {
    //                     if (password === students[p].password) {
    //                         okToLogIn = true
    //                     }
    //                 }
    //             }

    //             if (!okToLogIn) {
    //                 window.alert("Password is incorret. Please try again. (Password is case sensitive)")
    //             } else {
    //                 saveToLocalStorage()
    //                 loginButton.disabled = false;
    //                 loginButton.classList.remove('noLogIn');
    //                 loginButton.classList.add('buttons');
    //             }
    //         }
    //     }

    // }

    // resetButton.onclick = function() {
    //     user = nil;
    //     loginButton.disabled = true;
    //     loginButton.classList.remove("buttons");
    //     loginButton.classList.add("noLogIn")
    // }





}

/******************************************************************** 
*                       MAIN FUNCTIONALITY                          *
********************************************************************/
function main() {
    console.log("main called")

    /******** LOGGIN REAPPEARS *******/
    loginBox.classList.toggle('fadeIn');


}







/******************************************************************** 
*                       FETCH FUNCTIONALITY                         *
********************************************************************/

/************** GETCOURSEDATA FUNCTION *************/
async function getCourseData() {
    
    // Pull the data from Google Sheets
    const response = await Promise.all(courseSheetData);
    const data = await Promise.all(response.map((item) => {
        return item.json();
    }))

    for (var i = 1; i < data[0].length; i++) {
        var courseObj = new Course(data[0][i][0], data[0][i][1], data[0][i][2], data[0][i][3], data[0][i][4], data[0][i][5], data[0][i][6], data[0][i][7], data[0][i][8])
        courses.push(courseObj);
    }

}

/************** GETSTUDENTDATA FUNCTION *************/
async function getStudentData() {
    
    // Pull the data from Google Sheets
    const response = await Promise.all(studentSheetData);
    const data = await Promise.all(response.map((item) => {
        return item.json();
    }))

    for (var i = 1; i < data[0].length; i++) {
        var studentObj = new Student(data[0][i][0], data[0][i][1], data[0][i][2], data[0][i][3], data[0][i][4], data[0][i][5], data[0][i][6], data[0][i][7], data[0][i][8], data[0][i][9], data[0][i][10], data[0][i][11], data[0][i][12], data[0][i][13], data[0][i][14], data[0][i][15], data[0][i][16], data[0][i][17])
        students.push(studentObj);
    }

}


/******************************************************************** 
*                     LOCAL STORAGE FUNCTION                        *
********************************************************************/
function saveToLocalStorage() {
    localStorage.setItem('students', JSON.stringify(students))
    localStorage.setItem('courses', JSON.stringify(courses))
    localStorage.setItem('user', JSON.stringify(user))
}