<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $_SESSION['fullname'] = $_POST["fullname"];
    echo $_SESSION['fullname'];

}

