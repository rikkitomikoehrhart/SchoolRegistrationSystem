"use strict";

/*
   SchoolRegistationSystem

   Author: Rikki Tomiko Ehrhart
   Date:   04.23.24

   Filename: filteredclasslist.js

   =========
   This file runs the search classes filter feature on the registration page

*/
/******************************************************************** 
*                        GLOBAL VARIABLES                           *
********************************************************************/
// Grab the classes from local storage
var courses = JSON.parse(localStorage.getItem('courses'));
var student = JSON.parse(localStorage.getItem('user'));
var classList = JSON.parse(localStorage.getItem("coursesArray"))
var online = true;
var inPerson = true;
var subjects = [];
var xButtons = [];



/******************************************************************** 
*                     WINDOW ONLOAD FUNCTION                        *
********************************************************************/
window.onload = function() {
    /******* WHEN THE PAGE LOADS *******/
    // Fill the Selected Classes list  
    addToSelectedClassList()
    
    // Add functionality to the x buttons
    removeSelectedClass();



    /******* SEARCH FILTER *******/
    // Grab the filter checkboxes
    var typeOfClassBoxes = document.getElementsByClassName("typeOfClass");
    var subjectBoxes = document.getElementsByClassName("subjectBox");

    // Check if the Online/InPerson checkboxes are checked
    for(var i = 0; i < typeOfClassBoxes.length; i++) {
        // Goes through array of checkboxes and checks id and if checked
        typeOfClassBoxes[i].onclick = function(e) {
            // Sets the online and inPerson to whether or not those boxes are checked
            checkOnline(e)
            
            // After online and inPerson set, clear results and updateUI
            clearResults()
            updateUI()
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
            updateUI()
        }
    }



    /******* ADD CLASSES TO SELECTED CLASS LIST *******/
    // Grab the add class buttons
    var addClassButtons = document.getElementsByClassName("class-add");

    // Loop through the buttons and add an onclick function
    for (var i = 0; i < addClassButtons.length; i++) {
        addClassButtons[i].addEventListener("click", function(e) {
            // Delcare an okToAdd variable
            var okToAdd = okToAddClass(e)
                        
            // If okToAdd is true
            if (okToAdd) {
                // add class to the list
                classList.push(e.target.id)
                
                // and add class to selected class list
                addOneToSelectedClassList(e.target.id);
                updateRegistered(e.target.id);

                /******* REMOVE CLASSES FROM SELECTED CLASSES LIST *******/
                removeSelectedClass();
            }
        })
    }


}




/******************************************************************** 
*                     SELECTED LIST FUNCTION                        *
********************************************************************/
/************* ADDTOSELECTEDCLASSLIST FUNCTION *************/
// populates the list of classes in the classList array
function addToSelectedClassList() {
    // Loop through the class list:
    for (var c = 0; c < classList.length; c++) {
        // Grab the elements
        var listOfClasses = document.getElementsByClassName("added-class");
        var selectedList = document.getElementById("selected-classes-list");

        // Create a div element to be the class selection
        var selectedClass = document.createElement("div");

        // give it a class of "class" for styling and add the id to class for functionality
        selectedClass.classList.add("added-class");
        selectedClass.classList.add(classList[c].id);

        // Get the HTML for the new row 
        var classHTML = getSelectedClassHTML(classList[c])

        // Assign classHtml to the selected class item
       selectedClass.innerHTML = classHTML;

        // Delcare a Boolean ok to match variable
        var okToMatch = true

        // Check to see if the html matches a class already listed
        for (var l = 0; l < listOfClasses.length; l++) {
            if (selectedClass === listOfClasses[l]) {
                okToMatch = false
            }
        }

        // If it is ok to add, then add
        if (okToMatch) {
            // Append the selected class to the list
            selectedList.appendChild(selectedClass);
        }
        
        // Add the button to xButton list
        xButtons = document.getElementsByClassName("xButton");
    }
}

/************* GETSELECTEDCLASSHTML FUNCTION *************/
// Returns the html for the classes in the selected class list
function getSelectedClassHTML(c) {
    // Return the HTML for the inside of the selected Class
    return `<h5>` + c.name + `</h5><p>` + c.days + ` @ ` + c.start + `-` + c.end + `</p><button class="xButton">X</button>`
}

/************* REMOVESELECTEDCLASS FUNCTION *************/
// Adds an onclick function to selected class's xButton and removes it from list and array
function removeSelectedClass() {
    // Loop through the buttons
    for (var b = 0; b < xButtons.length; b++) {
        //On click function
        xButtons[b].onclick = function() {
            // Remove the class row from the page
            this.parentNode.parentNode.removeChild(this.parentNode);

            // Grab the index of the removed class
            var indexToRemove = classList.indexOf(this.parentNode.classList[1])
            
            // Remove that index class from the classesList so it can be added again if needed
            classList.splice(indexToRemove, 1);

            // Loop through the courses array
            for (var c = 0; c < courses.length; c++) {
                // if the course.id matches the class that was removed
                if (courses[c].id === this.parentNode.classList[1]) {
                    // update registered total by removing one
                    courses[c].registered -= 1;

                    // Update UI
                    updateUI();
                }
            }
        }
    }
}








/******************************************************************** 
*                        FILTER FUNCTIONS                           *
********************************************************************/
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
                    if (courses[j].online === "TRUE") {
                        // and add it to the listOfClasses
                        listOfClasses.push(courses[j])
                    }
                // Else if inPerson is checked but online isn't
                } else if (inPerson && !online) {
                    // Check if course is inPerson
                    if (courses[j].online === "FALSE") {
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
function updateList(c) {
    // Grab the div that is going to house the list of class cards
    var classList = document.getElementById("class-list")

    // Loop through classes array
    for (var i = 0; i < c.length; i++) {
        // create a new div for the class card
        var classCard = document.createElement("div");

        // give it a class of "class" for styling
        classCard.classList.add("class");
        classCard.classList.add(c[i].id)

        // Create the HTML for the class card
        var classHtml = getClassCardHTML(c[i])
    
        // Change the innerHTML of the classCard to include the HTML
        classCard.innerHTML = classHtml
        
        // Append the card to the class list.
        classList.appendChild(classCard)
    }
}

/************* GETCLASSCARDHTML FUNCTION ************/
// Creates the HTML for the class cards in the search result
function getClassCardHTML(c) {
    // Check if class registered is less than 20
    if (c.registered < 20) {
        // if so, include the add class
        var classHtml = `<h4>` + c.name + `</h4> <p class="class-description">` + c.description + `</p><div class="class-stats"><p class="class-availablity"><span>` + c.registered + `</span><span>/</span><span>20</span></p><p class="class-day-time">` + c.days + ` From ` + c.start + ` to ` + c.end + `</p><button class="class-add" id="` + c.id +`">Add Class</button></div>`
    } else {
        // if not, include the full class
        var classHtml = `<h4>` + c.name + `</h4> <p class="class-description">` + c.description + `</p><div class="class-stats"><p class="class-availablity"><span>` + c.registered + `</span><span>/</span><span>20</span></p><p class="class-day-time">` + c.days + ` From ` + c.start + ` to ` + c.end + `</p><button class="class-full" id="` + c.id +`">Class Full</button></div>`
    }

    // return the html
    return classHtml
}

/************* ADDSUBJECT FUNCTION *************/
// adds subject to the subject array
function addSubject(e) {
    // Add the subject to the subjects array
    subjects.push(e.srcElement.id);
}

/************* REMOVESUBJECT FUNCTION *************/
// removes subject from the subject array
function removeSubject(e) {
    // Find the index of where the subject is in the array
    var index = subjects.indexOf(e.srcElement.id)

    // remove the subject from the array
    subjects.splice(index, 1);
}











/******************************************************************** 
*                    ADDING CLASSES FUNCTIONS                       *
********************************************************************/
/************* OKTOADD FUNCTION *************/
// Checks to see if class is ok to add, if so returns true, if not returns false
function okToAddClass(e) {
    // Declare okToAdd Boolean
    var okToAdd = true


    // When the button is clicked, check to see if class is already chosen 
    if (classList.length > 0) {
        // Loop through the classList of ids
        for (var i = 0; i < classList.length; i++) {
            if (e.target.id === classList[i]) {
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
        for (var c = 0; c < classList.length; c++) {
            var classListTime = getDays(classList[c])

            // If the class the user wants to add's day and time match a class
            // already selected by the user then change okToAdd to false. 
            if (addedClassTime === classListTime) {
                    okToAdd = false;
                    window.alert("Class day and time conflicts with a class already selected.");
                    return okToAdd;
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

/************* ADDONETOSELECTEDCLASSLIST FUNCTION *************/
// adds the class chosen to the selected class list
function addOneToSelectedClassList(e) {
    // Grab the elements
    var listOfClasses = document.getElementsByClassName("added-class");
    var selectedClassList = document.getElementById("selected-classes-list");

    // Create a div element to be the class selection
    var selectedClass = document.createElement("div");

    // give it a class of "class" for styling
    selectedClass.classList.add("added-class");

    // Get the HTML for the new row 
    var classHTML = getHTML(e, selectedClass)
    console.log(classHTML)

    // Assign classHtml to the selected class item
    selectedClass.innerHTML = classHTML;

    // Delcare a Boolean ok to match variable
    var okToMatch = true

    // Check to see if the html matches a class already listed
    for (var l = 0; l < listOfClasses.length; l++) {
        if (selectedClass === listOfClasses[l]) {
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

/************* UPDATEREGISTERED FUNCTION *************/
// update the registered amount
function updateRegistered(updateClass) {
    // Grab ids
    var classesListed = document.getElementsByClassName("class")


    for (var i = 0; i < classesListed.length; i++) {
        if (classesListed[i].classList[1] === updateClass) {
            for (var j = 0; j < courses.length; j++) {
                if (courses[j].id === updateClass) {
                    courses[j].registered ++;

                    //Update UI
                    updateUI();

                }
            }
        }
    }

}






/******************************************************************** 
*                          UI FUNCTIONS                             *
********************************************************************/
/************* CLEARRESULTS FUNCTION *************/
// clears the HTML of the search results area 
function clearResults() {
    // Grabs the search results list
    var results = document.getElementById("class-list");

    // Changes the search results list to a white space
    results.innerHTML = ' ';
}

/************* UPDATEUI FUNCTION *************/
// Clears the screen and updates the UI
function updateUI() {
    // Clear the screen
    clearResults();

    // Check for search parameters
    if (subjects.length > 0) {
        // if so, pull classes
        var coursesList = getClasses(online, inPerson, subjects)
    }

    // Fill screen based on those search parameters
    updateList(coursesList)
}

















