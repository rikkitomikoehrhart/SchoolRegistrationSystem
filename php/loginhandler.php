<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $_SESSION['fullname'] = $_POST["fullname"];
    echo $fullname;

    header("Location: ../dashboard.html");
}

