"use strict";

/*
   SchoolRegistationSystem

   Author: Rikki Tomiko Ehrhart
   Date:   04.29.24

   Filename: dashboard.js

   =========
   This file grabs the student file from the name in the welcome message

*/

/************* GLOBAL VARIABLES *************/
var username;
var user;


/************* ONLOAD WINDOW FUNCTION *************/
window.onload = function() {
   /******* GRABBING THE USER *******/
   // Grab the name of the user from the Welcome Message
   username = document.getElementById('username').innerText;
   
   
   // // Go through Students array to find the user and setting them to user
   // for (var u = 0; u < students.length; u++) {
   //    if (username == students[i].name) {
   //       user = students[i]
   //    }
   // }

   user = localStorage.getItem('user')
   console.log(user)

   /******* *******/


}