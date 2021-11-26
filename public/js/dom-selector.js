let arrJPWord = new Map();
arrJPWord
  .set("a", "あ");
  /*.set("i", "い")
  .set("u", "う")
  .set("e", "え")
  .set("o", "お")
  .set("ka", "か")
  .set("ki", "き")
  .set("ku", "く")
  .set("ke", "け")
  .set("ko", "こ")
  .set("sa", "さ")
  .set("shi", "し")
  .set("su", "す")
  .set("se", "せ")
  .set("so", "そ")
  .set("ta", "た")
  .set("chi", "ち")
  .set("tsu", "つ")
  .set("te", "て")
  .set("to", "と")
  .set("na", "な")
  .set("ni", "に")
  .set("nu", "ぬ")
  .set("ne", "ね")
  .set("no", "の")
  .set("ha", "は")
  .set("hi", "ひ")
  .set("fu", "ふ")
  .set("he", "へ")
  .set("ho", "ほ")
  .set("ma", "ま")
  .set("mi", "み")
  .set("mu", "む")
  .set("me", "め")
  .set("mo", "も")
  .set("ya", "や")
  .set("yu", "ゆ")
  .set("yo", "よ")
  .set("ra", "ら")
  .set("ri", "り")
  .set("ru", "る")
  .set("re", "れ")
  .set("ro", "ろ")
  .set("wa", "わ")
  .set("wo", "を")
  .set("n", "ん")
  .set("1", "一")
  .set("2", "二")
  .set("3", "三")
  .set("4", "四")
  .set("5", "五")
  .set("6", "六")
  .set("7", "七")
  .set("8", "八")
  .set("9", "九")*/

let startStatus = false;
let level = 5000;
let support = false,
  superSupport = false,
  specialSupportGPA = 0;
let pointLevel = 0,
  prePoint = 0;
let start;
let gameStatus = false;
let levelUp = false;
let div, randStarBubble;
let slideIndex = 1;
const btnContinue = document.getElementById("btnContinue");
const btnStop = document.getElementById("btnStop");
const btnRestart = document.getElementById("btnRestart");
const btnPaused = document.getElementById("btnPaused");
const btnSaveChange = document.getElementById("btnSaveChange");
const btnNext = document.getElementById("btnNext");
const btnPrev = document.getElementById("btnPrev");
const screenPlay = document.querySelector(".screen-play");
const mainScreen = document.querySelector(".main-screen");
const answer = document.getElementById("answer");
const point = document.getElementById("point");
const arrow = document.getElementById("arrows");
const specialSupport = document.getElementById("specialSupport");
const customBubble = document.querySelectorAll(".bubble-layout");
const colorPicked = document.querySelectorAll(".form-control-color");
let backgroundBubble;
const listColorPicked = new Map();
const brightnessValue = document.getElementById("brightnessValue");
const sliderBrightness = document.getElementById("sliderBrightness");
brightnessValue.innerHTML = sliderBrightness.value;
const board = document.getElementById("boardPlay");
const music = document.querySelector("#music");
const tick = document.querySelector("#tick");
let txtBackgroundChoose;
let defaultTurn = 3;
let turn = document.getElementById("turn");
turn.textContent = defaultTurn;
let currentPoint = 0;
const storeCurrentPoint = document.getElementById("storeCurrentPoint");
let idBubble = 0;