"use strict";

/*
   SchoolRegistationSystem

   Author: Rikki Tomiko Ehrhart
   Date:   04.23.24

   Filename: selectedclasses.js

   =========
   This file runs the selected classes menu on the side of the registration page

*/
/************* GLOBAL VARIABLES **************/
var classesList = []
var xButtons = []

/************* ON CHANGE WINDOW FUNCTION *************/
window.onchange = function() {
    /******* ADD CLASSES TO SELECTED CLASSES LIST *******/
    
    // Grab the add class buttons
    var addClassButtons = document.getElementsByClassName("class-add");

    // Loop through the buttons and add an onclick function
    for (var i = 0; i < addClassButtons.length; i++) {
        addClassButtons[i].onclick = function(e) {
            // Delcare an okToAdd variable
            var okToAdd = okToAddClass(e)
            

            // If okToAdd is true
            if (okToAdd) {
                // add class to the list
                classesList.push(e.target.id)
            
                
                // and add class to selected class list
                addToSelectedClassList(e)

                /******* REMOVE CLASSES FROM SELECTED CLASSES LIST *******/
                removeClass()
            }

        }



    }


}



/************* ADDTOSELECTEDCLASSLIST FUNCTION *************/
// adds the class chosen to the selected class list
function addToSelectedClassList(e) {
    // Grab the list of classes that are already in place
    var listOfClasses = document.getElementsByClassName("added-class");

    // Grab the selected class list
    var selectedClassList = document.getElementById("selected-classes-list");

    // Create a div element to be the class selection
    var selectedClass = document.createElement("div");

    // give it a class of "class" for styling
    selectedClass.classList.add("added-class");

    // find the course that matches e's id and set it to c
    var c
    for (var i = 0; i < courses.length; i++) {
        if (courses[i].id == e.target.id) {
            c = courses[i]
        }
    }

    // Create the HTML for the inside of the selected Class
    var classHtml = `<h5>` + c.name + `</h5><p>` + c.days + ` @ ` + c.start + `-` + c.end + `</p><button class="xButton">X</button>`

    // add id to class
    selectedClass.classList.add(c.id)


    // Assign classHtml to the selected class item
    selectedClass.innerHTML = classHtml;

    // Delcare a Boolean ok to match variable
    var okToMatch = true

    // Check to see if the html matches a class already listed
    for (var l = 0; l < listOfClasses.length; l++) {
        if (selectedClass == listOfClasses[l]) {
            okToMatch = false
        }        
    }

    if (okToMatch) {
        // Append the selected class to the list
        selectedClassList.appendChild(selectedClass);
    }
    

    // Add the button to xButton list
    xButtons = document.getElementsByClassName("xButton");

}



/************* OKTOADD FUNCTION *************/
// Checks to see if class is ok to add, if so returns true, if not returns false
function okToAddClass(e) {
    // Declare okToAdd Boolean
    var okToAdd = true


    // When the button is clicked, check to see if class is already chosen 
    if (classesList.length > 0) {
        // Loop through the classList of ids
        for (var i = 0; i < classesList.length; i++) {
            if (e.target.id === classesList[i]) {
                // if the class is already on the list, okToAdd is false
                okToAdd = false;
                alert("Class has already been added")
            }
        }
    }

    // Check to see if day/times conflict - Find the days/times of the current class
    var addedClassTime = getDays(e.target.id)

    // Check to see if there are any conflicts
    if (okToAdd) {
        for (var c = 0; c < classesList.length; c++) {
            var classListTime = getDays(classesList[c])

            // If the class the user wants to add's day and time match a class
            // already selected by the user then change okToAdd to false. 
            if (addedClassTime === classListTime) {
                    okToAdd = false;
                    window.alert("Class day and time conflicts with a class already selected.")
            }
        }
    }

    return okToAdd
}



/************* GETDAYS FUNCTION *************/
// returns day and time 
function getDays(classID) {
    var days = " ";
    var startTime = 0;

    for (var d = 0; d < courses.length; d++) {
        if (courses[d].id == classID) {
            days = courses[d].days;
            startTime = courses[d].start
        }
    }

    return days + ' ' + startTime
}



/************* REMOVECLASS FUNCTION *************/
// removes class from the selected class list
function removeClass() {
    // Loop through the buttons
    for (var b = 0; b < xButtons.length; b++) {
        //On click function
        xButtons[b].onclick = function() {
            // Remove the class row from the page
            this.parentNode.parentNode.removeChild(this.parentNode);

            // Grab the index of the removed class
            var indexToRemove = classesList.indexOf(this.parentNode.classList[1])
            
            // Remove that index class from the classesList so it can be added 
            // again if needed
            classesList.splice(indexToRemove, 1);
        }
    }
} 



