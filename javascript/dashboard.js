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
var user;


/************* ONLOAD WINDOW FUNCTION *************/
window.onload = function() {
   /******* GRABBING THE USER *******/
   // // Grab the student from local storage
   var localData = localStorage.getItem('user')
   user = JSON.parse(localData)

   /******* SET CALENDAR *******/
   // Update Classes
   updateWeekClasses(user)
   udpateWeekendClasses(user)


}


/************* UPDATEWEEKCLASSES FUNCTION *************/
// Goes through the user.classes and calls the calendarEntry() function
function updateWeekClasses(student) {
   // check each of the user classes and call the calendarEntry() function
   if (student.mw8) {
      calendarEntry(student.mw8, 'mw', 8,)
   }
   if (student.mw10) {
      calendarEntry(student.mw10, 'mw', 10)
   }
   if (student.mw1) {
      calendarEntry(student.mw1, 'mw', 1)
   }
   if (student.mw3) {
      calendarEntry(student.mw3, 'mw', 3)
   }
   if (student.tt8) {
      calendarEntry(student.tt8, 'tt', 8)
   }
   if (student.tt10) {
      calendarEntry(student.tt10, 'tt', 10)
   }
   if (student.tt1) {
      calendarEntry(student.tt1, 'tt', 1)
   }
   if (student.tt3) {
      calendarEntry(student.tt3, 'tt', 3)
   }
}


/************* UPDATEWEEKENDCLASSES FUNCTION *************/
// Goes through the user.classes and calls the calendarWeekendEntry() function
function udpateWeekendClasses(student) {
   console.log("called")
   // check each of the user weekend classes and call the calendarWeekendEntry() function
   if (student.fr8) {
      calendarWeekendEntry(student.fr8, 'fr', 8)
   }
   if (student.fr1) {
      calendarWeekendEntry(student.fr1, 'fr', 1)
   }
   if (student.st8) {
      calendarWeekendEntry(student.st8, 'st', 8)
   }
   if (student.st1) {
      calendarWeekendEntry(student.st1, 'st', 1)
   }
   if (student.su8) {
      calendarWeekendEntry(student.su8, 'su', 8)
   }
   if (student.su1) {
      calendarWeekendEntry(student.su1, 'su', 1)
   }
}


/************* CALENDARENTRY FUNCTION *************/
// updates the calendar with the classes
function calendarEntry(course, days, time) {
   // Get days
   var firstday
   var secondday

   if (days === 'mw') {
      firstday = 'mon-'
      secondday = 'wed-'
   } else if (days === 'tt') {
      firstday = 'tue-'
      secondday = 'thr-'
   }

   // Grab the hours
   var firsthour1 = document.getElementById(firstday + time);
   var firsthour2 = document.getElementById(secondday + time);
   var secondhour1 = document.getElementById(firstday + (time +1));
   var secondhour2 = document.getElementById(secondday + (time +1));

   // Get class name
   var className
   for (var n = 0; n < courses.length; n++) {
      if (course === courses[n].id) {
         className = courses[n].name
      }
   }
   
   firsthour1.innerHTML = className;
   firsthour2.innerHTML = className;

   firsthour1.classList.add("calendar-top")
   firsthour2.classList.add("calendar-top")
   secondhour1.classList.add("calendar-bottom")
   secondhour2.classList.add("calendar-bottom")
}



/************* CALENDARWEEKENDENTRY FUNCTION *************/
// updates the calendar with the weekend classes
function calendarWeekendEntry(course, day, time) {
   // Grab the day
   var singleDay
   if (day === "fr") {
      singleDay = "fri-"
   } else if (day === "st") {
      singleDay = "sat-"
   } else if (day === "su") {
      singleDay = "sun-"
   }


   // Grab the hours
   var firsthour = document.getElementById(singleDay + time);
   var secondhour = document.getElementById(singleDay + (time + 1));
   var thirdhour = document.getElementById(singleDay + (time + 2));
   var fourthhour = document.getElementById(singleDay + (time + 3));

   // Get class name
   var className
   for (var n = 0; n < courses.length; n++) {
      if (course === courses[n].id) {
         className = courses[n].name
      }
   }
   
   firsthour.innerText = className;

   firsthour.classList.add("calendar-top")
   secondhour.classList.add("calendar-middle")
   thirdhour.classList.add("calendar-middle")
   fourthhour.classList.add("calendar-bottom")
}