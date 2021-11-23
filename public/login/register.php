<?php
require_once "../config.php";
require_once "../models/db.php";
require_once "../models/user.php";
/**
 * Sessions:
 */
session_start();
/**
 * Nếu tồn tại sessions thì tức là người dùng đã đằng nhập, nên không cần đăng nhập nữa.
 * Lập tức chuyển đến trang admin.
 */
if (isset($_SESSION['username']) == TRUE && isset($_SESSION['password']) == TRUE) {
    header("Location:../../index.php");
}

$user = new User;
/**
 * Check user password and password1
 */
$sign_up_successfully = TRUE;
if (isset($_POST["username"]) == TRUE && isset($_POST["password"]) == TRUE && isset($_POST["password1"]) == TRUE) {
    // Kiểm tra password xem có khớp nhau hay không:
    if ($_POST["password"] != $_POST["password1"]) {
        $sign_up_successfully = FALSE;
        echo '<div style="color:red;font-style:italic;margin:15px 0 0 0;">Password does not match!</div>';
    }

    // Kiểm tra xem username đã tồn tại hay chưa:
    $user = User::login_checkUsername($_POST['username']);
    if (count($user) > 0) {
        $sign_up_successfully = FALSE;
        echo '<div style="color:red;font-style:italic;margin-left: 43%;
            margin-top: -313px;
            position: absolute;">Username already exists!</div>';
    }

    // Đăng ký thành công:
    if ($sign_up_successfully == TRUE) {
        $insertResult = -1;
        $insertResult = User::insertUser($_POST['username'], password_hash($_POST["password"], PASSWORD_DEFAULT));
        if ($insertResult > 0) {
            echo '<div style="color:green;font-style:italic;margin-left: 38%;
                padding-top: -273px;
                position: absolute;
                margin-top: -313px;">You have successfully signed up!<br>Please login now!</div>';
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <link rel="icon" href="https://e7.pngegg.com/pngimages/289/772/png-clipart-japan-euclidean-icon-japan-face-smiley.png">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/fontawesome.min.css" integrity="sha384-jLKHWM3JRmfMU0A5x5AkjWkw/EYfGUAGagvnfryNV3F9VqM98XiIH7VBGVoxVSc7" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/login.css">
    <title>Hirigana - Register</title>
</head>

<body>

    <div id='content'>
        <div class='content__bg-img'></div>
        <div class='content__login-form'>
            <h1 class='text-center content__registerform-title'>Register</h1>
            <form action="register.php" method="POST">
                <div class="form-group content__form-group--frm--position">
                    <label for="inputEmail1" class='content__lbl'>Email address</label>
                    <input type="email" class="form-control content__input" id="inputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="username" id="username">
                </div>

                <div class="form-group content__form-group--frm--position">
                    <label for="inputPassword1" class='content__lbl'>Password</label>
                    <input type="password" class="form-control content__input" id="inputPassword1" placeholder="Enter new password" name="password" id="password">
                </div>
                <div class="form-group content__form-group--frm--position">
                    <label for="new password" class='content__lbl'>Confirm password</label>
                    <input type="password" class="form-control content__input" id="password" aria-describedby="" placeholder="Enter conffirm password" name="password1" id="password1">
                </div>
                <button type="submit" class="btn content__btn--rounded">SIGN UP</button>
            </form>
            <a href='login.php#content' class='text-center content__signup'>LOGIN</a>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>

</html>