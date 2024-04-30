# School Registration System

- A web application for a school registration system that allows students to register for courses and view their schedules -- this is my final project for my Beginner Web Programming Class, Spring 2024.


---
# Table of Contents
- [Testing Environment](https://github.com/rikkitomikoehrhart/SchoolRegistrationSystem?tab=readme-ov-file#testing-environment)
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

In order to test the code in the test server:
1. Click on the Green **< > Code** button. 
2. Click on the **Codespaces** tab
3. Click on the code space labeled **"PHP Test Environment"**
4. Once loaded in the terminal enter the following code and press enter:
```
sudo sed -i 's/Listen 80$//' /etc/apache2/ports.conf
```
5. Then enter the following code and press enter:
```
sudo sed -i 's/<VirtualHost \*:80>/ServerName 127.0.0.1\n<VirtualHost \*:8080>/' /etc/apache2/sites-enabled/000-default.conf
```
6. Then enter the following code and press enter:
```
apache2ctl start
```
7. After a few seconds a pop up should appear in the bottom right hand corner letting you know that the server is live -- click the **Open in Browser** button and a new tab will appear with the test site. 


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