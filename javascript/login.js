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
var loadingSign = document.getElementById('loading')
var loginBox = document.getElementById('login-box')

// Google API KEY
const apiKey = `AIzaSyBsKeWicVmKOgL311Yw4BYaxXXkAvP_y6w`

// Course Google Sheet
const courseUrl = `https://script.google.com/macros/s/AKfycbz9kwt9zQI2Y4lX_p9_XVYuF_awQnUd2_cnidcnhhf_974_tlL7kNGFMEah4Ffh6M_3IA/exec`
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
                    user = students[i]
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
                if (passwordInput.value === user.password) {
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
        user = nil;
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
    localStorage.setItem('courses', JSON.stringify(courses));
    localStorage.setItem('user', JSON.stringify(user));
}