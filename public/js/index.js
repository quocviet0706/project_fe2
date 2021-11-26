import ConfigBoard from "./config-boardplay.js";
updateBGList_Setting();

// Setting Chooses Background
//Check Screen Size when resize
window.addEventListener("resize", () => {
  let txtBackground =
    document.getElementsByClassName("bgSlides")[Math.floor(Math.random() * 9)]
      .children[1].src;
  mainScreen.style.backgroundImage = `url(${txtBackground})`;
  updateBGList_Setting();
});
btnNext.addEventListener("click", () => {
  showSlides((slideIndex += 1));
});
btnPrev.addEventListener("click", () => {
  showSlides((slideIndex += -1));
});
showSlides(slideIndex);

function updateBGList_Setting() {
  let listBG = Array.from(ConfigBoard.getListBG(screen.width));
  let i = 0;
  let slides = document.getElementsByClassName("bgSlides");
  for (let j = 0; j < slides.length; j += 1) {
    slides[j].children[1].src = listBG[i];
    i += 1;
  }
}
function showSlides(n) {
  let slides = document.getElementsByClassName("bgSlides");
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
  //Get src of img
  txtBackgroundChoose = slides[slideIndex - 1].children[1].src;
}

//Setting Brightness
sliderBrightness.oninput = () => {
  brightnessValue.innerHTML = +sliderBrightness.value;
  board.style.backgroundColor = `rgba(0, 0, 0, ${
    +sliderBrightness.value / 100
  })`;
};

//List of color use for custom bubble
colorPicked.forEach((element) => {
  listColorPicked.set(element.id, element.value);
  element.addEventListener("change", (e) => {
    //Re-Update listColorPicked
    //Demo a change to user
    listColorPicked.set(element.id, element.value);
    backgroundBubble = [...listColorPicked.values()];
    //console.log(backgroundBubble);
    customBubble[0].style.background = `linear-gradient(to right top, ${backgroundBubble.toString()})`;
  });
});

//Save chnage setting
btnSaveChange.addEventListener("click", (e) => {
  //Setting Background Bubble
  backgroundBubble = [...listColorPicked.values()];
  customBubble[0].style.background = `linear-gradient(to right top, ${backgroundBubble.toString()})`;

  //Setting Background Board Play
  mainScreen.style.backgroundImage = `url(${txtBackgroundChoose})`;
});

//GPA === 10 will up percent, 100% -> ready
function updateValue() {
  if (parseInt(specialSupport.style.width) >= 100) {
    arrow.className = "";
    arrow.className += "btn btn-outline-danger";
    document.getElementById("support-normal").style.display = "none";
    document.getElementById("support-supper").style.display = "inline";
    specialSupport.classList.replace("bg-info", "bg-danger");
    superSupport = true;
    //console.log("Special Support Active");
  } else {
    //GPA not enough to up percent
    if (specialSupportGPA < 2) {
      specialSupportGPA += 1;
    } //Percent up, GPA = 0
    else {
      let txtPoint = parseInt(specialSupport.style.width);
      specialSupport.style.width = `${txtPoint + 10}%`;
      specialSupportGPA = 0;
      //console.log('Percent UP');
    }
    //console.log(superSupport);
  }
}

function checkExistSpecialClass(e = document.body, className = "unknow") {
  return e.classList.contains(className);
}
//Btn Continue
btnContinue.addEventListener("click", (event) => {
  gameStatus = true;
  //console.log(`Game Status: ${gameStatus}`);
  btnContinue.style.display = "none";
  btnStop.style.display = "inline";
  answer.focus();
  startStatus = true;
  f1();
  document.getElementById("point-status-blur").style.display = "none";
  document.getElementById("point-status-smile").style.display = "inline";
  document.getElementById("point-status-angry").style.display = "none";
  document.getElementById("btnShop").style.display = "none";
  document.getElementById("btnSetting").style.display = "none";
});

//Btn Stop
btnStop.addEventListener("click", (event) => {
  gameStop();
  btnContinue.style.display = "inline";
  btnStop.style.display = "none";
});

//Btn Restart
btnRestart.addEventListener("click", (event) => {
  var elements = document.querySelectorAll(".word");
  screenPlay.innerHTML = "";
  document.getElementById("point-status-blur").style.display = "inline";
  document.getElementById("point-status-smile").style.display = "none";
  document.getElementById("point-status-angry").style.display = "none";
});
//Setting volume:
document.querySelector("#bgmusic").addEventListener("change", (e) => {
  if (!e.target.checked) {
    music.muted = true;
    document.querySelector("#icon_loa").classList = "fas fa-volume-mute";
  } else {
    music.play();
    music.muted = false;

    document.querySelector("#icon_loa").classList = "fas fa-volume-up";
  }
});

// Stop game: but hidden button
function gameStop() {
  let prevPoint = parseInt(point.value);
  updateCurrentPoint(prevPoint);
  startStatus = false;
  clearInterval(start);
  pointLevel = 0;
  point.value = 0;
  level = 5000;
  gameStatus = false;
  support = false;
  document.getElementById("arrows").disabled = false;
  document.getElementById("btnShop").style.display = "inline";
  document.getElementById("btnSetting").style.display = "inline";
  document.getElementById("point-status-blur").style.display = "none";
  document.getElementById("point-status-smile").style.display = "none";
  document.getElementById("point-status-angry").style.display = "inline";
}

//Interval game play
function f1() {
  if (gameStatus) {
    //Check prePoint and pointLevel, if true -> level up
    if (prePoint - pointLevel === 15) {
      pointLevel = prePoint;
      levelUp = true;
    }

    //Update level(time)
    clearInterval(start);
    if (levelUp) {
      changeTime();
      levelUp = false;
    }

    start = setInterval(() => {
      f1();
      gamePlay();
      music.play();
    }, level);
  }
}

//Paused game
let pausedGame = () => {
  clearInterval(start);
  document.querySelectorAll(".word").forEach((bubble) => {
    if (bubble.style.webkitAnimationPlayState === "paused") {
      bubble.style.webkitAnimationPlayState = "running";
      f1();
      startStatus = true;
      music.muted = false;
    } else if (
      bubble.style.webkitAnimationPlayState === "running" ||
      bubble.style.webkitAnimationPlayState === ""
    ) {
      bubble.style.webkitAnimationPlayState = "paused"; // assuming you want to toggle
      startStatus = false;
      music.muted = true;
    }
  });
};
//Btn Pause
btnPaused.addEventListener("click", (event) => {
  pausedGame();
});

//Change level(time) went level up
function changeTime() {
  if (level !== 1000) {
    level = level - 500;
  }
}

// Convert id bubble to 32bit integer
function stringToHash(string) {
  var hash = 0;

  if (string.length == 0) return hash;

  for (let i = 0; i < string.length; i++) {
    let char = string.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }

  return hash;
}

//Check type of bubble
function checkBubble(txtType = "normal", element, result, bubbleId) {
  prePoint = parseInt(point.value);
  switch (txtType) {
    case "trap": {
      if (element.getAttribute("bubble-id").length === 1) {
        gameStop();
        break;
      } else {
        //console.log("Item remove exist !!!");
      }
    }
    default: {
      let hashId = stringToHash(bubbleId);
      if (element.getAttribute("bubble-id") === bubbleId) {
        if (element.getAttribute("bubble-id").length === 1) {
          element.setAttribute("bubble-id", `d${bubbleId}${hashId}`);
          if (element.innerHTML === result) {
            element.remove();
            pointUp(txtType);
          }
        } else {
          //console.log("Item remove exist !!!");
        }
      }
      break;
    }
  }
}

//Up to point
function pointUp(txtType = "normal") {
  prePoint = parseInt(point.value);
  switch (txtType) {
    case "star": {
      point.value = prePoint + 2;
      tick.play();
      break;
    }
    default: {
      point.value = prePoint + 1;
      tick.play();
      break;
    }
  }
  updateValue();
}

//Create bubble and append to screen play
//'data-before' is content, use to check type of bubble
//trap: skip, star: 2point + 1arrow, normal: 1point
//Ratio is 6: 3normal, 2star, 1trap
function createBubble() {
  //  let arrJPWord = ConfigBoard.getHirigana(screen.width);
  let arrJPWordKeys = Array.from(arrJPWord.values());
  backgroundBubble = [...listColorPicked.values()];
  div = document.createElement("div");
  div.className = "word bubble-layout";
  div.textContent =
    arrJPWordKeys[Math.floor(Math.random() * arrJPWordKeys.length)];
  div.style.left = `${
    Math.floor(Math.random() * (window.screen.width - 55)) + 10
  }px`;
  div.style.background = `linear-gradient(to right top, ${backgroundBubble.toString()})`;
  div.setAttribute("data-tick", "none");
  div.setAttribute("bubble-id", idBubble);
  idBubble += 1;
  randStarBubble = Math.floor(Math.random() * 6) + 1;
  switch (randStarBubble) {
    case 1: {
      div.setAttribute("data-before", "trap");
      div.style.background = `linear-gradient(to right top,#8c8c8c,#808080,#737373,#666666,#595959)`;
      break;
    }
    case 2:
    case 3: {
      div.style.color = "#000";
      div.style.background = `linear-gradient(to right top,#ffffe6,#ffffcc,#ffffb3,#ffff99,#ffff80)`;
      div.setAttribute("data-before", "star");
      break;
    }
    default: {
      div.setAttribute("data-before", "normal");
    }
  }
  screenPlay.appendChild(div);
  //Get and print content of bubble
  //console.log(window.getComputedStyle(div).content);
}

function checkAnswer(element, listBubble) {
  //  let arrJPWord = ConfigBoard.getHirigana(screen.width);
  //console.log(arrJPWord);
  let answerInput = element.value;
  if (arrJPWord.get(answerInput)) {
    let result = arrJPWord.get(answerInput);
    listBubble.forEach((element) => {
      if (element.getAttribute("data-tick") !== "tick") {
        let txtType = element.getAttribute("data-before");
        let idBubble_Remove = element.getAttribute("bubble-id");
        checkBubble(txtType, element, result, idBubble_Remove);
      }
    });
    element.focus();
  } else {
    //Case type Blank
    //console.log("Blank");
    element.focus();
  }
}

//Arrows support event(click)
arrow.addEventListener("click", (event) => {
  if (gameStatus) {
    let check = checkExistSpecialClass(arrows, "btn-outline-danger");
    if (check && superSupport) {
      screenPlay.innerHTML = "";
      superSupport = false;
      arrow.classList.replace("btn-outline-danger", "btn-outline-info");
      specialSupport.style.width = `${0}%`;
      document.getElementById("support-normal").style.display = "inline";
      document.getElementById("support-supper").style.display = "none";
      specialSupport.classList.replace("bg-danger", "bg-info");
    } else {
      if (support) {
        support = false;
        arrow.classList.replace("btn-outline-warning", "btn-outline-info");
      } else {
        support = true;
        arrow.classList.replace("btn-outline-info", "btn-outline-warning");
      }
    }
  }
});

//Gameplay:note
function gamePlay() {
  createBubble();
  var demo = document.querySelectorAll(".word");
  //Loop bubbles
  demo.forEach((element) => {
    let txtType = element.getAttribute("data-before");
    //Event(click) on bubble after use arrows support
    element.addEventListener("click", (event) => {
      let turnQty = defaultTurn;
      if (support == true && turnQty > 0) {
        //console.log("Have support ...");
        let bubbleId = element.getAttribute("bubble-id");
        element.setAttribute(
          "bubble-id",
          `d${bubbleId}${stringToHash(bubbleId)}`
        );
        element.remove();
        tick.play();
        if (txtType !== "trap") pointUp(txtType);
        support = false;
        arrow.classList.replace("btn-outline-warning", "btn-outline-info");
        turn.textContent = turnQty - 1;
        defaultTurn--;
        //console.log(defaultTurn);
        answer.focus();
      } else {
        if (startStatus) {
          //Comment Fail -- function tick on bubble
          if (element.getAttribute("data-tick") === "none") {
            element.setAttribute("data-tick", "tick");
            element.classList.add("bubble--tick");
          } else {
            element.setAttribute("data-tick", "none");
            element.classList.remove("bubble--tick");
          }
          //console.log(element.getAttribute("data-tick"));
        }
      }
    });

    //Event check end animation of bubble, get last position top
    element.addEventListener("animationend", function (event) {
      const svgRect = this.getBoundingClientRect();
      let txtType = element.getAttribute("data-before");
      let tick = element.getAttribute("data-tick");
      let endLimitPosition = parseInt(svgRect.top);
      if (endLimitPosition) {
        if (tick !== "tick") {
          gameStop();
        } else {
          if (txtType !== "trap") {
            gameStop();
          } else {
            let bubbleId = element.getAttribute("bubble-id");
            element.setAttribute(
              "bubble-id",
              `d${bubbleId}${stringToHash(bubbleId)}`
            );
            element.remove();
          }
        }
      }
    });
  });

  //Event(keyCode = Enter) get answer, check and remove bubbles valid
  answer.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
      checkAnswer(answer, demo);
    }
  });
}

//Blur tab on browser
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    console.log("hidden");
    clearInterval(start);
    document.querySelectorAll(".word").forEach((bubble) => {
      bubble.style.webkitAnimationPlayState = "paused"; // assuming you want to toggle
      startStatus = false;
      music.muted = true;
    });
  } else {
    console.log("visible");
    document.querySelectorAll(".word").forEach((bubble) => {
      bubble.style.webkitAnimationPlayState = "running";
      f1();
      startStatus = true;
      music.muted = false;
    });
  }
});
