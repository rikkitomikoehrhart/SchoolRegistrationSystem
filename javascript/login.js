"use strict";

/*
   SchoolRegistationSystem

   Author: Rikki Tomiko Ehrhart
   Date:   04.28.24

   Filename: login.js

   =========
   This file checks the username and password

*/
/************* GLOBAL VARIABLES *************/
var user;


/************* ONLOAD WINDOW FUNCTION *************/
window.onload = main()


/************* MAIN FUNCTION *************/
async function main() {
    // Grab the log-in elements
    var fullNameInput = document.getElementById('fullname');
    var passwordInput = document.getElementById('password');
    var loginButton = document.querySelector('#loginButton');
    var resetButton = document.getElementById("resetButton")

    // Declare some variables
    var username = '';
    var password = '';
    var okToLogIn = false;

    // Disable loginButton
    loginButton.disabled = true;


    // Validate email
    fullNameInput.onchange = function() {
        if (fullNameInput.value) {
            for (var i = 0; i < students.length; i++) {
                if (fullNameInput.value == students[i].name) {
                    username = students[i].name;
                    user = students[i]
                }
            }
        }

        if (username === '') {
            window.alert("Your name is not in our system. Please try again. (Name is case sensitive)")
        } else {
            // Grab password
            passwordInput.onchange = function() {
                if (passwordInput.value) {
                    password = passwordInput.value
                }

                // Validate password:
                for (var p = 0; p < students.length; p++) {
                    if (username === students[p].name) {
                        if (password === students[p].password) {
                            okToLogIn = true
                        }
                    }
                }

                if (!okToLogIn) {
                    window.alert("Password is incorret. Please try again. (Password is case sensitive)")
                } else {
                    localStorage.setItem('user', JSON.stringify(user))
                    loginButton.disabled = false;
                    loginButton.classList.remove('noLogIn');
                    loginButton.classList.add('buttons');
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