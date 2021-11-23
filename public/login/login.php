<?php

session_start();
require_once "../config.php";
require_once "../models/db.php";
require_once "../models/user.php";
if (isset($_SESSION["username"])) {
  header("Location:../../index.php");
}
$user = new User;
/*
      Check username and password
       */
if (isset($_POST["username"]) == TRUE) {
  // Kiểm tra username, password:
  $user = User::login_checkUsername($_POST['username']);
  if (count($user) > 0) {
    if (password_verify($_POST['password'], $user[0]['password']) === TRUE) {
      $_SESSION['username'] =  $user[0]['username'];
      $_SESSION['password'] = $user[0]['password'];
      header("Location:../../index.php");
    } else {
      echo '<div style="color:red;font-style:italic;margin-left: 34%;
            padding-top: -273px;
            position: absolute;
            margin-top: -313px;">You have entered wrong username or password!</div>';
    }
  } else {
    echo 'div style="color:red;font-style:italic;margin-left: 34%;
          padding-top: -273px;
          position: absolute;
          margin-top: -313px;">You have entered wrong username or password!</div>';
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
  <title>Hirigana - Login</title>
</head>

<body>
  <div id='introduce'>
    <div class='introduce__bg-img'></div>
    <div class='introduce__content'>
      <div class='introduce__content-body'>
        INTRODUCE: <span class="play-game"> Xin chào mọi người, dưới đây là một tựa game giành cho những bạn có sở thích học tiếng nhật và nâng cao trình độ của mình qua những chữ cái tiếng Nhật.
          Game dựa trên bảng chữ cái giúp người dùng dễ dàng ghi nhớ chúng hơn. Người chơi sẽ gõ các ký tự latin hoặc chữ số tương ứng trên bàn phím. Nếu gõ
          đúng, bong bóng sẽ bể và người chơi được +1 điểm. Nếu người chơi để 1 bong bóng chạm sàn thì trò chơi kết thúc.Trong các bong bóng, thỉnh thoảng sẽ có bong bóng đính kèm ngôi sao, nếu gõ
          đúng bong bóng có sao thì được +2 điểm Thỉnh thoảng sẽ xuất hiện các bong bóng màu đen. Người chơi không được gõ bong bóng đen mà phải để nó chạm sàn rồi biến mất. Nếu gõ trúng bong bóng đen thì
          trò chơi kết thúc. Chức năng bắn bong bóng. Người chơi có sẵn 3 mũi tên để bắn bể bong bóng nào mình không biết gõ hoặc gõ không kịp. Người chơi click chọn mũi tên, sau đó click lên bong bóng để bắn bể. Nếu bắn hết 3 mũi tên có sẵn, người chơi có thể đổi điểm
          để lấy thêm mũi tên. Tốc độ rơi của bong bóng sẽ tăng dần theo thời gian. Và cuối cùng chỉ cần bạn đăng nhập và chơi thôi nào?? </span>
      </div>
      <div class='introduce__controls text-center'>
        <a href="#content" class='btn btn-dark'>LOGIN</a>
      </div>
    </div>
  </div>
  <div id='content'>
    <div class='content__bg-img'></div>
    <div class='content__login-form'>
      <h1 class='text-center content__loginform-title'>LOGIN</h1>
      <form action="login.php" method="POST">
        <div class="form-group content__form-group--frm--position">
          <label for="inputEmail1" class='content__lbl'>Email address</label>
          <input type="email" class="form-control content__input" id="inputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="username" id="username">
        </div>
        <div class="form-group content__form-group--frm--position">
          <label for="inputPassword1" class='content__lbl'>Password</label>
          <input type="password" class="form-control content__input" id="inputPassword1" placeholder="Password" name="password" id="password">
        </div>
        <button type="submit" class="btn content__btn--rounded">LOGIN</button>
      </form>
      <a href='register.php' class='text-center content__signup'>SIGN UP</a>
    </div>
  </div>
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>

</html>