<?php
session_start();
if (isset($_SESSION['username']) == false && isset($_SESSION['password']) == false) {
  header('Location:./public/login/login.php#content');
}
?>
<html>

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <link rel="icon" href="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/fuo1nkxqk0mzumflmgam">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
  <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous">
  <link rel="stylesheet" href="./public/css/index.css">
  <title>PTying</title>
</head>

<body>

  <!-- Modal Store -->
  <div class="modal fade bd-example-modal-sm" id="storeModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content storemodal--bg">
        <div class="modal-header">
          <h5 class="modal-title"> STORE </h5>
          <button type="button" class="close btn btn-outline-danger" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span> </button>
        </div>
        <div class="modal-body">
          <div class="store-body-info mb-1">
            <div class="row">
              <div class="col-7">
                <div class="store-items-info">
                  <p>Name: <span id="itemName"> ... </span></p>
                  <p class="money">Price: <span id="itemPrice">...</span></p>
                  <p>Arrows: <span id="itemQty">...</span></p>
                </div>
              </div>
              <div class="col-5">
                <div class="store-body-img">
                  <img src="https://www.tapdoanpnholding.vn/Data/Sites/1/skins/default/img/index-news/bg-pn.png" class="img-fluid" id="mainItemImg">
                </div>
              </div>
            </div>
          </div>

          <div class="store-body-items">
            <img src="https://cdn0.iconfinder.com/data/icons/japan-50/48/bow_weapon_japan_culture_military-512.png" class="img-fluid storeItem" height="300px">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Bow_and_arrow_drawing.png" class="img-fluid storeItem" height="300px">
            <img src="https://i.pinimg.com/originals/47/a4/21/47a4219b9768425838ee2bed357c0e71.png" class="img-fluid storeItem" height="300px">
            <img src="https://www.apexhunting.com.au/assets/thumbL/118311-1012.png?20210309040400" class="img-fluid storeItem" height="300px">
          </div>
        </div>
        <div class="modal-footer">
          <p class="current-point">Current Point: <span id="storeCurrentPoint">0</span></p>
          <button type="button" class="btn btn-outline-primary" id="btnBuy">BUY</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal Setting -->
  <div class="modal fade" id="settingModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg" role="document">
      <div class="modal-content settingmodal--bg">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalScrollableTitle"> <b>SETTING</b> </h5>
          <button type="button" class="close btn btn-outline-danger" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>

        </div>
        <div class="modal-body">
          <div class="settinglogout">
            <label for="" style="margin-left: 30px;"> <b>Logout </b> </label>
            <button class=" btn--custom" style="margin-left: 30%;"><a href="./public/login/logout.php"><i class="fas fa-sign-out-alt"></i> </a> </button>
          </div> <br>
          <label for="" style="margin-left: 30px;"> <b>Volume</b> </label>
          <label for="bgmusic" style="margin-left:285px;">
            <p><i id="icon_loa" class="fas fa-volume-up"></i> </p>
          </label>
          <input type="checkbox" hidden name="" id="bgmusic">
          <audio id="music" autoplay loop>
            <source src="./public/audio/y2mate.com - 周杰伦钢琴曲合辑 by Lei Piano.mp3" type="audio/mp3">
          </audio>
          <audio controls hidden id="tick">
            <source src="./public/audio/tick.mp3" type="audio/mp3">
          </audio>

          <ol style="list-style: none;">
            <label for="settingCustomBubble"> <b>Custom Bubble </b> </label>
            <li class="mb-5 p-2" id="settingCustomBubble">
              <div class="setting-custom-color d-flex justify-content-center">
                <input type="color" class="form-control form-control-color" id="colorInput1" value="#ffe6ff" title="Choose your color">
                <input type="color" class="form-control form-control-color" id="colorInput2" value="#ffccff" title="Choose your color">
                <input type="color" class="form-control form-control-color" id="colorInput3" value="#ffb3ff" title="Choose your color">
                <input type="color" class="form-control form-control-color" id="colorInput4" value="#ff99ff" title="Choose your color">
                <input type="color" class="form-control form-control-color" id="colorInput5" value="#ff80ff" title="Choose your color">
              </div>
              <div class="demo-bubble bubble-layout">
              </div>
            </li>
            <hr>
            <label for="settingBightness"> <b>Brightness <p id="brightnessValue"></p></b> </label>
            <li class="mb-5 p-2" id="settingBightness">
              <div class="custom-brightness">
                <input type="range" min="1" max="100" value="50" class="slider-brightness" id="sliderBrightness">
              </div>
            </li>
            <hr>
            <label for="settingBackground"> <b>Background</b> </label>
            <li class="p-2" id="settingBackground">
              <div class="slideshow-container">
                <!-- Full-width images with number and caption text -->
                <div class="bgSlides">
                  <div class="numbertext">1 / 9</div>
                  <img src="https://free4kwallpapers.com/uploads/originals/2020/10/25/winter-in-shirakawa-japan-wallpaper.jpg" class="img-fluid" width="100%" height="100%">
                </div>

                <div class="bgSlides fade">
                  <div class="numbertext">2 / 9</div>
                  <img src="https://www.thebalance.com/thmb/gF4v7ZVXURl4T1bJV6-vW5ZfujA=/735x0/sunset-at-kiyomizu-dera-temple-and-cherry-blossom-season--sakura--on-spring-time-in-kyoto--japan-577613124-5c51bbe146e0fb0001c0dd97.jpg" class="img-fluid" width="100%" height="100%">
                </div>

                <div class="bgSlides fade">
                  <div class="numbertext">3 / 9</div>
                  <img src="./public/images/2766987.jpg" class="img-fluid" width="100%" height="100%">
                </div>

                <div class="bgSlides fade">
                  <div class="numbertext">4 / 9</div>
                  <img src="./public/images/3394730.jpg" class="img-fluid" width="100%" height="100%">
                </div>

                <div class="bgSlides fade">
                  <div class="numbertext">5 / 9</div>
                  <img src="./public/images/3394730.jpg" class="img-fluid" width="100%" height="100%">
                </div>

                <div class="bgSlides fade">
                  <div class="numbertext">6 / 9</div>
                  <img src="./public/images/3394730.jpg" class="img-fluid" width="100%" height="100%">
                </div>

                <div class="bgSlides fade">
                  <div class="numbertext">7 / 9</div>
                  <img src="./public/images/3394730.jpg" class="img-fluid" width="100%" height="100%">
                </div>

                <div class="bgSlides fade">
                  <div class="numbertext">8 / 9</div>
                  <img src="./public/images/3394730.jpg" class="img-fluid" width="100%" height="100%">
                </div>

                <div class="bgSlides fade">
                  <div class="numbertext">9 / 9</div>
                  <img src="./public/images/3394730.jpg" class="img-fluid" width="100%" height="100%">
                </div>

                <!-- Next and previous buttons -->
                <a class="prev" id="btnPrev">❮</a>
                <a class="next" id="btnNext">❯</a>
              </div>
            </li>
          </ol>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-outline-primary" id="btnSaveChange">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  <div class="main-screen img-fluid">
    <div class="row" id="boardPlay">
      <div class="col-md-5 col-lg-5 col-xl-5 col-sm-12">
        <div class="controls">
          <div class="main-screen-navigation d-flex justify-content-center">
            <button class="nav-btn-pause btn--custom" id="btnRestart"> <i class="fas fa-redo"></i> </button>
            <button class="nav-btn-continute btn--custom" id="btnContinue"> <i class="far fa-play-circle"></i> </button>
            <button class="nav-btn-stop btn--custom" id="btnStop"> <i class="far fa-stop-circle"></i> </button>
            <button class="nav-btn-shop btn--custom" id="btnShop"> <i class="fas fa-store" data-toggle="modal" data-target="#storeModal"></i> </button>
            <input type="checkbox" hidden name="" id="store-cb">
            <button class="nav-btn-setting btn--custom" id="btnSetting" data-toggle="modal" data-target="#settingModal"> <i class="fas fa-cogs"></i> </button>
            <button class="nav-btn-pause btn--custom" id="btnPaused"> <i class="far fa-pause-circle"></i> </button>

          </div>
        </div>
      </div>
      <div class="col-md-7 col-lg-7 col-xl-7 col-sm-12">
        <div class="support">
          <label for="point">
            <i class="far fa-laugh-beam" id="point-status-smile"></i>
            <i class="far fa-angry" id="point-status-angry"></i>
            <i class="far fa-smile" id="point-status-blur"></i>
          </label>
          <input type="text" name="point" value="0" id="point" readonly="">
          <input type="text" name="answer" placeholder="Type here..." id="answer" value="">
        </div>
      </div>
      <div class="screen-play text-white fs-2">
      </div>
      <div class="arrow-support d-flex justify-content-center">

        <button id="arrows" class="btn btn-outline-info">
          <i class="far fa-paper-plane" id="support-normal"><span id="turn">1</span> </i>
          <i class="fas fa-fighter-jet" id="support-supper"></i>
        </button>
        <div class="progress progress--custom">
          <div class="progress-bar bg-info progress-bar-striped progress-bar-animated" id="specialSupport"  style="width: 97%" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
    </div>
  </div>

  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  <script src="./public/js/dom-selector.js"></script>
  <script type="module" src="./public/js/index.js"></script>
  <script src="./public/js/store.js"></script>
</body>

</html>