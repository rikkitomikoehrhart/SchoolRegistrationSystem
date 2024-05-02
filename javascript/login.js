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
var student;

// Other Saved Data
var classList = [];

// Grab the login container:
var loadingSign = document.getElementById('loading')
var loginBox = document.getElementById('login-box')

// Course Google Sheet
const courseUrl = `https://script.google.com/macros/s/AKfycbzyj9BpGkX9loD2_fxrdVe_6XwAqsoRk9ZerRe3fvXPLx3Ka8V41dnbL3hjxeijsA6-gQ/exec`
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
    
    
    getCourseData()
        .then(() => getStudentData())
        .then(() => saveToLocalStorage())
        .then(() => main());
    
}


/******************************************************************** 
*                       MAIN FUNCTIONALITY                          *
********************************************************************/
function main() {
    /******** LOGGIN REAPPEARS *******/
    loadingSign.classList.toggle('fadeOut')
    loginBox.classList.toggle('fadeIn');



    /******* LOGIN ELEMENTS *******/
    // Grab the log-in elements
    var fullNameInput = document.getElementById('fullname');
    var passwordInput = document.getElementById('password');
    var loginButton = document.querySelector('#loginButton');
    var resetButton = document.getElementById("resetButton");
    var loginForm = document.getElementById("login");


    // Declare some variables
    var username = '';
    var password = '';
    var okToLogIn = false;


    // Disable login elements
    loginButton.disabled = true;
    loginButton.style.opacity = .25;
    passwordInput.disabled = true;
    passwordInput.style.opacity = .25;


    /******* VALIDATE NAME *******/
    fullNameInput.onchange = function() {
        // Checks if fullname has something typed inside
        if (fullNameInput.value) {
            // Loop through the students array and checks if the inputed name 
            // equals any of the student's name
            for (var i = 0; i < students.length; i++) {
                if (fullNameInput.value == students[i].name) {
                    // if yes, assign the student's name to username and the student object to user
                    username = students[i].name;
                    student = students[i]
                    localStorage.setItem('student', students[i])
                    // Get student's classList
                    getStudentClassList();
                }
            }
        }

        // Checks if username is empty (name entered is not in the students array)
        if (username === '') {
            // if username is empty then name entered is incorrect
            window.alert("Your name is not in our system. Please try again. (Name is case sensitive)")

            // resets the form 
            loginForm.reset();
        } else {
            // Name user entered is a valid name, enable the password input:
            passwordInput.disabled = false;
            passwordInput.style.opacity = 1;

            // Grab password
            passwordInput.onkeyup = function() {
                // Checks on each key stroke if the password equals the user's password
                if (passwordInput.value === student.password) {
                    // if it does, enable the login button
                    loginButton.disabled = false;
                    loginButton.style.opacity = 1;
                    loginButton.classList.remove('noLogIn');
                    loginButton.classList.add('buttons');


                    // set the value of password to what the user has entered
                    password = passwordInput.value;

                    // Now the name entered belongs to a student and the password for 
                    // that student is correct, so it is okToAdd:
                    okToLogIn = true;

                    saveToLocalStorage()
                } else {
                    // if it does not, set password to empty string
                    password = '';

                    // make sure that the login button is disabled
                    loginButton.disabled = true;
                    loginButton.style.opacity = .25;
                    loginButton.classList.remove('buttons');
                    loginButton.classList.add('noLogIn');

                    // ^ this should cover it if a user enters the correct password but
                    // then adds extra character(s) and makes it incorrect.
                    okToLogIn = false;
                }

            }

            passwordInput.onfocusout = function() {
                if (!okToLogIn) {
                    window.alert("Password is incorret. Please try again. (Password is case sensitive)")
                    passwordInput.value = '';
                }
            }
        }

    }

    resetButton.onclick = function() {
        student = nil;
        loginButton.disabled = true;
        loginButton.classList.remove("buttons");
        loginButton.classList.add("noLogIn")
    }


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
        var courseObj = new Course(data[0][i][0], data[0][i][1], data[0][i][2], data[0][i][3], data[0][i][4], data[0][i][5], data[0][i][6], data[0][i][7], data[0][i][8], data[0][i][9])
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
    localStorage.setItem('courses', JSON.stringify(courses));
    localStorage.setItem('students', JSON.stringify(students))
    localStorage.setItem('student', JSON.stringify(student));
    localStorage.setItem('classList', JSON.stringify(classList))

}

function getStudentClassList() {
    if (student.mw8) {
        classList.push(student.mw8)
    }
    if (student.mw10) {
        classList.push(student.mw10)
    }
    if (student.mw1) {
        classList.push(student.mw1)
    }
    if (student.mw3) {
        classList.push(student.mw3)
    }
    if (student.tt8) {
        classList.push(student.tt8)
    }
    if (student.tt10) {
        classList.push(student.tt10)
    }
    if (student.tt1) {
        classList.push(student.tt1)
    }
    if (student.tt3) {
        classList.push(student.tt3)
    }
    if (student.fr8) {
        classList.push(student.fr8)
    }
    if (student.fr1) {
        classList.push(student.fr1)
    }
    if (student.st8) {
        classList.push(student.st8)
    }
    if (student.st1) {
        classList.push(student.st1)
    }
    if (student.su8) {
        classList.push(student.su8)
    }
    if (student.su1) {
        classList.push(student.su1)
    }

    localStorage.setItem('classList', JSON.stringify(classList))
}

