"use strict";

/*
   SchoolRegistationSystem

   Author: Rikki Tomiko Ehrhart
   Date:   04.28.24

   Filename: login.js

   =========
   This file checks the username and password

*/


/************* ONLOAD WINDOW FUNCTION *************/
window.onload = main()


/************* MAIN FUNCTION *************/
async function main() {
    // Grab the log-in elements
    var emailInput = document.getElementById('email');
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
    emailInput.onchange = function() {
        if (emailInput.value) {
            for (var i = 0; i < students.length; i++) {
                if (emailInput.value == students[i].email) {
                    username = students[i].email;
                }
            }
        }

        if (username === '') {
            window.alert("Email is not in our system. Please try again. (Email is case sensitive)")
        } else {
            // Grab password
            passwordInput.onchange = function() {
                if (passwordInput.value) {
                    password = passwordInput.value
                }

                // Validate password:
                for (var p = 0; p < students.length; p++) {
                    if (username === students[p].email) {
                        if (password === students[p].password) {
                            okToLogIn = true
                        }
                    }
                }

                if (!okToLogIn) {
                    window.alert("Password is incorret. Please try again. (Password is case sensitive)")
                } else {
                    loginButton.disabled = false;
                    loginButton.classList.remove('noLogIn');
                    loginButton.classList.add('buttons');
                }
            }
        }

    }

    resetButton.onclick = function() {
        loginButton.disabled = true;
        loginButton.classList.remove("buttons");
        loginButton.classList.add("noLogIn")
    }





}