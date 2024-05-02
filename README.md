# School Registration System

- A web application for a school registration system that allows students to register for courses and view their schedules -- this is my final project for my Beginner Web Programming Class, Spring 2024.

I have used HTML, CSS, and JavaScript.

I have housed the student information (name, password, classes, etc.) and the course information (subject, name, description, registered, etc.) into two Google Sheets. This program pulls the data from the sheets to use in the application, but it does not post to Google Sheets (which requires Nodejs which I haven't learned yet), it does save the students and courses to local storage. 

---
# Table of Contents
- [Testing Environment](https://github.com/rikkitomikoehrhart/SchoolRegistrationSystem?tab=readme-ov-file#testing-environment)
  - [Log-ins](https://github.com/rikkitomikoehrhart/SchoolRegistationSystem?tab=readme-ov-file#log-ins)
- [Project Requirements](https://github.com/rikkitomikoehrhart/SchoolRegistrationSystem?tab=readme-ov-file#project-requirements)
  - [User Authentication](https://github.com/rikkitomikoehrhart/SchoolRegistrationSystem?tab=readme-ov-file#user-authentication)
  - [Student Registration](https://github.com/rikkitomikoehrhart/SchoolRegistrationSystem?tab=readme-ov-file#student-registration)
  - [Student Dashboard](https://github.com/rikkitomikoehrhart/SchoolRegistrationSystem?tab=readme-ov-file#student-registration)
  - [Database](https://github.com/rikkitomikoehrhart/SchoolRegistrationSystem?tab=readme-ov-file#database)
  - [UX/UI Design](https://github.com/rikkitomikoehrhart/SchoolRegistrationSystem?tab=readme-ov-file#uiux-design)
  - [HTML/CSS](https://github.com/rikkitomikoehrhart/SchoolRegistrationSystem?tab=readme-ov-file#htmlcss)
  - [JavaScript](https://github.com/rikkitomikoehrhart/SchoolRegistrationSystem?tab=readme-ov-file#javascript)
  - [Documentation](https://github.com/rikkitomikoehrhart/SchoolRegistrationSystem?tab=readme-ov-file#documentation)
  - [Testing](https://github.com/rikkitomikoehrhart/SchoolRegistrationSystem?tab=readme-ov-file#testing)
- [Attributions](https://github.com/rikkitomikoehrhart/SchoolRegistrationSystem?tab=readme-ov-file#attributions)

---

## Testing Environment

In order to test the code in the test server from Github Browser:
1. Click on the Green **< > Code** button. 
2. Click on the **Codespaces** tab
3. Click on the code space labeled **"Test Environment"**
4. Once loaded to the **Extensions** Tab on the left
5. Ensure that you have **Live Server (Five Server)** (or a different live server of your choice)
6. If it is installed you will see a **"Go Live"** button in the bottom right hand corner of the screen
7. Click go live and you will have the server running live in another browser tab.


### Log-ins
There are 10 students in the database, feel free to play around with any student (this is all case sensitive):

| User Name | Password |
|-----------|----------|
| Buffy Summers | buffy |
| Kim Possible | kim |
| Kitty Pryde | kitty |
| Wendy Wu | wendy |
| Marnie Cromwell | marnie |
| Sydney Bristow | sydney |
| Olivia Benson | olivia |
| Veronica Mars | veronica |
| Jessica Fletcher | jessica |
| Velma Dinkley | velma |

---

## Project Requirements

### User Authentication:
- Implement a user authentication system for students. Students should be able to **log in** and **access their accounts**.

### Student Registration:
- Students should be able to **register for courses**
- Each course should have a **title**, **description**, and **available slots**
- Implement validation to **prevent over-registration** or **registration for full courses**

### Student Dashboard:
- Create a **dashboard for students to view their registered courses**
- Display **course information**, **schedule**, and **any important notifications**

### Database:
- Use a **simple database system (e.g., JSON files) to store student and course data.**
- **Ensure data persistence**

### UI/UX Design:
- Create an **intuitive and user-friendly interface for students.**
- Implement **responsive design for various screen sizes**

### HTML/CSS:
- Use **HTML and CSS to structure and style the web app** (CSS Framework is welcome).

### JavaScript:
- Implement **client-side scripting using JavaScript for interactivity**
- Ise JavaScript to **handle user actions**, **validate inputs**, and **update the UI dynamically**

### Documentation:
- Provide clear documentation for your code including **comments** and **explanations**

### Testing:
- Thoroughly **test the web app** to ensure it functions as expected and is free of bugs.

---

## Attributions
The following is a list of credits for the resources I used:


### Images
| IMAGE | CREDIT |
|--------|--------|
| <img src="https://github.com/rikkitomikoehrhart/SchoolRegistrationSystem/blob/main/images/academicssign.jpg?raw=true" width="400" alt="Academics Sign on the side of a school building with graduates tossing their caps in front"> | Photo by [Leon Wu](https://unsplash.com/@leonjaywu?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/three-girls-in-graduation-gowns-hold-their-caps-in-the-air-LLfRMRT-9AY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) |