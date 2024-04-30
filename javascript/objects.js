"use strict";

/*
   SchoolRegistationSystem

   Author: Rikki Tomiko Ehrhart
   Date:   04.30.24

   Filename: objects.js

   =========
   This file holds the classes objects

*/

/************* STUDENT CLASS *************/
class Student {
    constructor(studentId, name, email, password, mw8, mw10, mw1, mw3, tt8, tt10, tt1, tt3, fr8, fr1, st8, st1, su8, su1) {
        this.studentId = studentId;
        this.name = name;
        this.email = email;
        this.password = password;
        this.mw8 = mw8;
        this.mw10 = mw10;
        this.mw1 = mw1;
        this.mw3 = mw3;
        this.tt8 = tt8;
        this.tt10 = tt10;
        this.tt1 = tt1;
        this.tt3 = tt3;
        this.fr8 = fr8;
        this.fr1 = fr1;
        this.st8 = st8;
        this.st1 = st1;
        this.su8 = su8;
        this.su1 = su1;
    }
}

/************* STUDENT CLASS *************/
class Course {
    constructor(id, subject, name, description, online, registered, days, start, end) {
        this.id = id;
        this.subject = subject;
        this.name = name;
        this.description = description;
        this.online = online;
        this.registered = registered;
        this.days = days;
        this.start = start;
        this.end = end;
    }
}
