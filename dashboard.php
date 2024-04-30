<!DOCTYPE html>
<html lang="en">
<head>
    <!--
        SchoolRegistrationSystem - index.html - Home Page

        Author: Rikki Tomiko Ehrhart
        Last Updated: 04.11.24

        Filename: index.html
    -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Brightview - Home Page</title>

    <!-- CSS STYLE SHEETS -->
    <link href="css/layout.css" rel="stylesheet" />
    <link href="css/navbar.css" rel="stylesheet" />
    <link href="css/footer.css" rel="stylesheet" />
    <link href="css/dashboard.css" rel="stylesheet" />

    <!-- LINKED JAVASCRIPT -->
    <script src="/javascript/objects.js"></script>
    <script src="/javascript/dashboard.js"></script>


</head>
<body>
    <!-- NAV BAR -->
    <nav>
        <div class="logo">
            <img src="images/brightviewcollegelogo.png" alt="The logo for Brightview College">
        </div>
        <ul>
            <li><a href="index.html">HOME</a></li>
            <li><a href="dashboard.php">DASHBOARD</a></li>
            <li><a href="registration.html">REGISTRATION</a></li>
        </ul>
    </nav>

    
    <!-- MAIN -->
    <main>
        <!-- SIDE BAR -->
        <aside>
            <div class="sidebar-title">
                <h3>IMPORTANT DATES</h3>
                <hr>
            </div>
            <div class="date-list">
                <div class="month">
                    <h5>AUGUST</h5>
                    <ul>
                        <li>26th - Classes Start</li>
                        <li>27th - Audit Registration Deadline</li>
                    </ul>
                </div>
                <div class="month">
                    <h5>SEPTEMBER</h5>
                    <ul>
                        <li>2nd - Labor Day</li>
                    </ul>
                </div>
                <div class="month">
                    <h5>OCTOBER</h5>
                    <ul>
                        <li>31st - Halloween</li>
                    </ul>
                </div>
            </div>
        </aside>

        <!-- ARTICLE -->
        <article>
            <div class="welcomemessage">
                <p>Welcome <span id="username"><?php echo $_POST['fullname'] ?></span>!</p>
            </div>
            <!-- CURRENT SCHEDULE IN CALENDAR -->
            <div class="course-calendar">
                <div class="course-calendar-title">
                    <h1>Schedule</h1>
                    <br>
                </div>
                <div class="course-calendar-table">
                    <table>
                        <tr class="day-names">
                            <th></th>
                            <th>MON</th>
                            <th>TUE</th>
                            <th>WED</th>
                            <th>THU</th>
                            <th>FRI</th>
                            <th>SAT</th>
                            <th>SUN</th>
                        </tr>
                        <tr class="calendar-row eight-am">
                            <td class="time-cell">8:00 AM</td>
                            <td id="mon-8"></td>
                            <td id="tue-8"></td>
                            <td id="wed-8"></td>
                            <td id="thr-8"></td>
                            <td id="fri-8"></td>
                            <td id="sat-8"></td>
                            <td id="sun-8"></td>
                        </tr>
                        <tr class="calendar-row nine-am">
                            <td class="time-cell">9:00 AM</td>
                            <td id="mon-9"></td>
                            <td id="tue-9"></td>
                            <td id="wed-9"></td>
                            <td id="thr-9"></td>
                            <td id="fri-9"></td>
                            <td id="sat-9"></td>
                            <td id="sun-9"></td>
                        </tr>
                        <tr class="calendar-row ten-am">
                            <td class="time-cell">10:00 AM</td>
                            <td id="mon-10"></td>
                            <td id="tue-10"></td>
                            <td id="wed-10"></td>
                            <td id="thr-10"></td>
                            <td id="fri-10"></td>
                            <td id="sat-10"></td>
                            <td id="sun-10"></td>
                        </tr>
                        <tr class="calendar-row eleven-am">
                            <td class="time-cell">11:00 AM</td>
                            <td id="mon-11"></td>
                            <td id="tue-11"></td>
                            <td id="wed-11"></td>
                            <td id="thr-11"></td>
                            <td id="fri-11"></td>
                            <td id="sat-11"></td>
                            <td id="sun-11"></td>
                        </tr>
                        <tr class="calendar-row twelve-pm">
                            <td class="time-cell">12:00 PM</td>
                            <td id="mon-12"></td>
                            <td id="tue-12"></td>
                            <td id="wed-12"></td>
                            <td id="thr-12"></td>
                            <td id="fri-12"></td>
                            <td id="sat-12"></td>
                            <td id="sun-12"></td>
                        </tr>
                        <tr class="calendar-row one-pm">
                            <td class="time-cell">1:00 PM</td>
                            <td id="mon-1"></td>
                            <td id="tue-1"></td>
                            <td id="wed-1"></td>
                            <td id="thr-1"></td>
                            <td id="fri-1"></td>
                            <td id="sat-1"></td>
                            <td id="sun-1"></td>
                        </tr>
                        <tr class="calendar-row two-pm">
                            <td class="time-cell">2:00 PM</td>
                            <td id="mon-2"></td>
                            <td id="tue-2"></td>
                            <td id="wed-2"></td>
                            <td id="thr-2"></td>
                            <td id="fri-2"></td>
                            <td id="sat-2"></td>
                            <td id="sun-2"></td>
                        </tr>
                        <tr class="calendar-row three-pm">
                            <td class="time-cell">3:00 PM</td>
                            <td id="mon-3"></td>
                            <td id="tue-3"></td>
                            <td id="wed-3"></td>
                            <td id="thr-3"></td>
                            <td id="fri-3"></td>
                            <td id="sat-3"></td>
                            <td id="sun-3"></td>
                        </tr>
                        <tr class="calendar-row four-pm">
                            <td class="time-cell">4:00 PM</td>
                            <td id="mon-4"></td>
                            <td id="tue-4"></td>
                            <td id="wed-4"></td>
                            <td id="thr-4"></td>
                            <td id="fri-4"></td>
                            <td id="sat-4"></td>
                            <td id="sun-4"></td>
                        </tr>
                        <tr class="calendar-row five-pm">
                            <td class="time-cell">5:00 PM</td>
                            <td id="mon-5"></td>
                            <td id="tue-5"></td>
                            <td id="wed-5"></td>
                            <td id="thr-5"></td>
                            <td id="fri-5"></td>
                            <td id="sat-5"></td>
                            <td id="sun-5"></td>
                        </tr>
                    </table>
                </div>
            </div>

            <br>
            <hr>
            <br>

            <!-- CURRENT COURSE LIST -->
            <div class="course-list">
                <div class="course-list-title">
                    <h1>Registered Courses</h1>
                </div>
                <div class="course-gallery" id="course-gallery">


                
                </div>
            </div>
        </article>
    </main>


    <!-- Footer -->
    <footer>
        <!-- LEFT -->
        <div class="footer-left">
            <ul>
            <li><a href="index.html">HOME</a></li>
            <li><a href="dashboard.html">DASHBOARD</a></li>
            <li><a href="registration.html">REGISTRATION</a></li>
            </ul>
        </div>

        <!-- CENTER -->
        <div class="footer-center">
            &copy; 2024 Brightview College
        </div>

        <!-- RIGHT -->
        <div class="footer-right">
            <!-- Address -->
            <address>
                Brightview College </br>
                12345 Brightview Drive </br>
                Austin, Texas 78757 </br>
            </address>
        </div>

    </footer>
</body>
</html>
