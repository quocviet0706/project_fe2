<?php
    session_start();
  
?>

<?php
    // Unset sessions: session_destroy(), unset().
    if(isset($_SESSION['username'])==TRUE) {
        unset($_SESSION['username']);
        unset($_SESSION['password']);
    }
    // Unset cookies:
    setcookie("username", "", time() - (3600 * 5));
    setcookie("password", "", time() - (3600 * 5));

    // Redirect page:
    header('Location: ../login/login.php');
?>