"use strict";

/*
   SchoolRegistationSystem

   Author: Rikki Tomiko Ehrhart
   Date:   04.30.24

   Filename: dashboard.js

   =========
   This file grabs the student file from the name in the welcome message

*/

/******************************************************************** 
*                        GLOBAL VARIABLES                           *
********************************************************************/
var user;
var courses;

/******************************************************************** 
*                     WINDOW ONLOAD FUNCTION                        *
********************************************************************/
/************* ONLOAD WINDOW FUNCTION *************/
window.onload = function() {
   /******* GRABBING THE USER AND COURSE DATA *******/
   // Grab the student from local storage
   var localUserData = localStorage.getItem('user');
   user = JSON.parse(localUserData)
   

   // Grab the classes from local storage
   var localClassesData = localStorage.getItem('courses')
   courses = JSON.parse(localClassesData)



   /******* SET CALENDAR *******/
   // Update Classes
   updateWeekClasses(user)
   udpateWeekendClasses(user)



   /******* SAVE STUDENT AND COURSES TO LOCAL STORAGE *******/
   localStorage.setItem('user', JSON.stringify(user));
   localStorage.setItem('courses', JSON.stringify(courses));


   /******* SET CLASS CARDS *******/
   // Grab the user's personal class list
   var userClassesArray = getClassArray(user);

   // Fill out the Classes cards list
   addClassCards(userClassesArray);
}




/******************************************************************** 
*                       CALENDAR FUNCTIONS                          *
********************************************************************/
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




/******************************************************************** 
*                     CLASS GALLERY FUNCTIONS                       *
********************************************************************/
/************* GETCLASSESARRAY FUNCTION *************/
// returns the array of classes that the user has
function getClassArray(student) {
   // Declare variables
   var courseIdArray = []
   var coursesArray = []

   // If student.time has a class in it, add that id to the courseIdArray
   if (student.mw8) {
      courseIdArray.push(student.mw8)
   }
   if (student.mw10) {
      courseIdArray.push(student.mw10)
   }
   if (student.mw1) {
      courseIdArray.push(student.mw1)
   }
   if (student.mw3) {
      courseIdArray.push(student.mw3)
   }
   if (student.tt8) {
      courseIdArray.push(student.tt8)
   }
   if (student.tt10) {
      courseIdArray.push(student.tt10)
   }
   if (student.tt1) {
      courseIdArray.push(student.tt1)
   }
   if (student.tt3) {
      courseIdArray.push(student.tt3)
   }
   if (student.fr8) {
      courseIdArray.push(student.fr8)
   }
   if (student.fr1) {
      courseIdArray.push(student.fr1)
   }
   if (student.st8) {
      courseIdArray.push(student.st8)
   }
   if (student.st1) {
      courseIdArray.push(student.st1)
   }
   if (student.su8) {
      courseIdArray.push(student.su8)
   }
   if (student.su1) {
      courseIdArray.push(student.su1)
   }

   // Loop through the array and find the course to add to the coursesArray
   for (var i = 0; i < courseIdArray.length; i++) {
      for (var c = 0; c < courses.length; c++) {
         if (courseIdArray[i] === courses[c].id) {
            coursesArray.push(courses[c])
         }
      }
   }

   
   // Save the coursesArray to localStorage so that the registration page can access it.
   localStorage.setItem("coursesArray", JSON.stringify(coursesArray));


   // return the array
   return coursesArray
}

/************* ADDCLASSESCARDS FUNCTION *************/
// returns the array of classes that the user has
function addClassCards(c) {
   // Grab the Classes gallery 
   var courseGallery = document.getElementById('course-gallery');

   // Loop through the array and add the classes:
   for (var i = 0; i < c.length; i++) {
      // Create the classCard element
      var classCard = document.createElement("div");

      // Add the class "course-card" to the classCard element
      classCard.classList.add("course-card");

      // Create the HTML for the card:
      var classCardHtml = `<h5>${c[i].name}</h5><p>${c[i].description}</p><br><p class="datetime">${c[i].days} @ ${c[i].start}-${c[i].end}</p>`;

      // Add the card HTML to the classCard
      classCard.innerHTML = classCardHtml;

      // Append the classCard to the courseGallery element
      courseGallery.appendChild(classCard)


   }


}

