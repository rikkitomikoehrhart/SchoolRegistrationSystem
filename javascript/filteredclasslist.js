"use strict";

/*
   SchoolRegistationSystem

   Author: Rikki Tomiko Ehrhart
   Date:   04.23.24

   Filename: filteredclasslist.js

   =========
   This file runs the search classes filter feature on the registration page

*/


/************* DELCARE GLOBAL VARIABLES *************/
var online = true;
var inPerson = true;
var subjects = [];



/************* ON LOAD WINDOW FUNCTION *************/
window.onload = function() {
    // Grab the filter checkboxes
    var typeOfClassBoxes = document.getElementsByClassName("typeOfClass");
    var subjectBoxes = document.getElementsByClassName("subjectBox");

    // Check if the Online/InPerson checkboxes are checked
    for(var i = 0; i < typeOfClassBoxes.length; i++) {
        // Goes through array of checkboxes and checks id and if checked
        typeOfClassBoxes[i].onclick = function(e) {
            // Sets the online and inPerson to whether or not those boxes
            // are checked
            checkOnline(e)
            
            // After online and inPerson set, clear results and updateUI
            clearResults()
            updateUI(online, inPerson, subjects)
        }
    }

    // Check if the Subject Boxes are checked
    for (var i = 0; i < subjectBoxes.length; i++) {
        // Goes through array of checkboxes and checks if they are checked
        subjectBoxes[i].onclick = function(e) {
            if (e.target.checked) {
                // If the checkbox is clicked, run addSubject function
                addSubject(e)
            } else {
                // If not, clear the results
                removeSubject(e)
                clearResults()
            }

            // Update the UI if either change happens
            updateUI(online, inPerson, subjects)
        }
    }

}


/************* CHECKONLINE FUNCTION *************/
// sets the online and inPerson based on the checkbox
function checkOnline(e) {
    // Mark online and inPerson based of if the checkboxes are checked
    if (e.srcElement.id == "online") {
        // if the id == online, set online to equal whatever outcome of the box
        online = (e.target.checked);
    } 
    if (e.srcElement.id == "in-person") {
        // if the id == in-person, set inPerson to equal whatever outcome of the box
        inPerson = (e.target.checked);
    }
}

/************* ADDSUBJECT FUNCTION *************/
// adds subject to the subject array
function addSubject(e) {
    subjects.push(e.srcElement.id);
}

/************* REMOVESUBJECT FUNCTION *************/
// removes subject from the subject array
function removeSubject(e) {
    var index = subjects.indexOf(e.srcElement.id)
    subjects.splice(index, 1);
}

/************* CLEARRESULTS FUNCTION *************/
// clears the HTML of the search results area 
function clearResults() {
    var results = document.getElementById("class-list");
    results.innerHTML = ' ';
}

/************* GETCLASSES FUNCTION *************/
// Use the checked box values to return an array of all classes that fit
function getClasses(online, inPerson, subjects) {
    // Delcare an empty array to add values to or to return empty
    var listOfClasses = []

    // Loop through the subjects array of the wanted subjects
    for (var i = 0; i < subjects.length; i++) {
        // Loop through the courses array of what is available
        for (var j = 0; j < courses.length; j++) {
            // if the course subject matches the filter subject
            if (courses[j].subject == subjects[i]) {
                // and if both online and inPerson are checked
                if (online && inPerson) {
                    // add the course to the listOfClasses array
                    listOfClasses.push(courses[j])
                // Else if online is checked and not inPerson
                } else if (online && !inPerson) {
                    // Check if the course is online only
                    if (courses[j].online) {
                        // and add it to the listOfClasses
                        listOfClasses.push(courses[j])
                    }
                // Else if inPerson is checked but online isn't
                } else if (inPerson && !online) {
                    // Check if course is inPerson
                    if (!courses[j].online) {
                        // and add it to listOfClasses
                        listOfClasses.push(courses[j])
                    }
                }
            }
        }
    }
    // return the listOfClasses array either empty or with items in it
    return listOfClasses
}

/************* UPDATELIST FUNCTION *************/
// uses the array of classes to update the html of the class list
function updateList(classes) {
    // Grab the div that is going to house the list of class cards
    var classList = document.getElementById("class-list")

    // Loop through classes array
    for (var i = 0; i < classes.length; i++) {
        // create a new div for the class card
        var classCard = document.createElement("div");

        // give it a class of "class" for styling
        classCard.classList.add("class");

        // Create the HTML for the class card
        var classHtml = `<h4>` + classes[i].name + `</h4> <p class="class-description">` + classes[i].description + `</p><div class="class-stats"><p class="class-availablity"><span>` + classes[i].registered + `</span><span>/</span><span>` + classes[i].available + `</span></p><p class="class-day-time">` + classes[i].days + ` From ` + classes[i].start + ` to ` + classes[i].end + `</p><button class="class-add">Add Class</button></div>`
        
        // Change the innerHTML of the classCard to include the HTML
        classCard.innerHTML = classHtml
        
        // Append the card to the class list.
        classList.appendChild(classCard)
    }
}

/************* UPDATEUI FUNCTION *************/
// runs the functions to update the UI
function updateUI(online, inPerson, subjects) {
    // start by clearing out the results to make a blank canvas
    clearResults()

    // check if there is any subjects in the subjects array
    if (subjects.length > 0) {
        // if so, pull classes from the data
        var classes = getClasses(online, inPerson, subjects)

        // use the classes to update the results display list
        updateList(classes)
    }
}
