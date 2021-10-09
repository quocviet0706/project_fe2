
import ConfigBoard from './config-boardplay.js';

updateBGList_Setting();
let arrJPWord = new Map();
arrJPWord.set('a','あ')
    .set('i','い')
    .set('u','う')
    .set('e','え')
    .set('o','お')
    .set('ka','か')
    .set('ki','き')
    .set('ku','く')
    .set('ke','け')
    .set('ko','こ')
    .set('sa','さ')
    .set('shi','し')
    .set('su','す')
    .set('se','せ')
    .set('so','そ')
    .set('ta','た')
    .set('chi','ち')
    .set('tsu','つ')
    .set('te','て')
    .set('to','と')
    .set('na','な')
    .set('ni','に')
    .set('nu','ぬ')
    .set('ne','ね')
    .set('no','の')
    .set('ha','は')
    .set('hi','ひ')
    .set('fu','ふ')
    .set('he','へ')
    .set('ho','ほ')
    .set('ma','ま')
    .set('mi','み')
    .set('mu','む')
    .set('me','め')
    .set('mo','も')
    .set('ya','や')
    .set('yu','ゆ')
    .set('yo','よ')
    .set('ra','ら')
    .set('ri','り')
    .set('ru','る')
    .set('re','れ')
    .set('ro','ろ')
    .set('wa','わ')
    .set('wo','を')
    .set('n','ん')
    .set('1','一')
    .set('2','二')
    .set('3','三')
    .set('4','四')
    .set('5','五')
    .set('6','六')
    .set('7','七')
    .set('8','八')
    .set('9','九');

 let startStatus = false;
 let level = 5000;
 let support = false, superSupport = false, specialSupportGPA = 0;
 let pointLevel = 0, prePoint = 0;
 let start;
 let gameStatus = false;
 let levelUp = false;
 let div, randStarBubble;
 var slideIndex = 1;
 const btnContinue = document.getElementById('btnContinue');
 const btnStop = document.getElementById('btnStop');
 const btnRestart = document.getElementById('btnRestart');
 const btnPaused = document.getElementById('btnPaused');
 const btnSaveChange = document.getElementById('btnSaveChange');
 const btnNext = document.getElementById('btnNext');
 const btnPrev = document.getElementById('btnPrev');
 const btnSave = document.getElementById('btnSave');
 const screenPlay = document.querySelector('.screen-play');
 const mainScreen = document.querySelector('.main-screen');
 const answer = document.getElementById('answer');
 const point = document.getElementById('point');
 const arrow = document.getElementById('arrows');
 const specialSupport = document.getElementById('specialSupport');
 const customBubble = document.querySelectorAll('.bubble-layout');
 const colorPicked = document.querySelectorAll('.form-control-color');
 let backgroundBubble;
 const listColorPicked = new Map();
 const brightnessValue = document.getElementById('brightnessValue');
const sliderBrightness = document.getElementById('sliderBrightness');
brightnessValue.innerHTML = sliderBrightness.value;
const board = document.getElementById ('boardPlay');
var music = document.querySelector('#music');
var  tick =document.querySelector('#tick');
var have_Music = false;
let txtBackgroundChoose;
let defaultTurn = 3;
let turn = document.getElementById('turn');
turn.textContent = defaultTurn;
let currentPoint = 0;
const storeCurrentPoint = document.getElementById('storeCurrentPoint');


// Setting Chooses Background
//Check Screen Size when resize
window.addEventListener('resize', () => {
  let txtBackground = document.getElementsByClassName("bgSlides")[slideIndex - 1].children[1].src;
  mainScreen.style.backgroundImage = `url(${txtBackground})`;
  updateBGList_Setting();
});
btnNext.addEventListener('click', () => {
  showSlides(slideIndex += 1);
});
btnPrev.addEventListener('click', () => {
  showSlides(slideIndex += -1);
});
showSlides(slideIndex);

function updateBGList_Setting() {
  let listBG = Array.from(ConfigBoard.getListBG(screen.width));
  let i = 0;
  let slides = document.getElementsByClassName("bgSlides");
  for (let j = 0; j < slides.length; j+=1) {
    slides[j].children[1].src = listBG[i];
    i+=1;
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
  board.style.backgroundColor = `rgba(0, 0, 0, ${+sliderBrightness.value/100})`;
}

//List of color use for custom bubble
 colorPicked.forEach((element) => {
    listColorPicked.set(element.id, element.value);
    element.addEventListener('change', (e) => {
      //Re-Update listColorPicked 
      //Demo a change to user
      listColorPicked.set(element.id, element.value);
      backgroundBubble = [...listColorPicked.values()];
      //console.log(backgroundBubble);
      customBubble[0].style.background = `linear-gradient(to right top, ${backgroundBubble.toString()})`;
   });
 });
 
 //Save chnage setting
 btnSaveChange.addEventListener('click', (e) => {
   //Setting Background Bubble
   backgroundBubble = [...listColorPicked.values()];
   customBubble[0].style.background = `linear-gradient(to right top, ${backgroundBubble.toString()})`;
   
   //Settting Background Board Play
   console.log(txtBackgroundChoose);
   mainScreen.style.backgroundImage = `url(${txtBackgroundChoose})`;
 });

 //GPA === 10 will up percent, 100% -> ready
 function updateValue(e){
  //GPA not enough to up percent
  if(specialSupportGPA < 2  ){
    specialSupportGPA += 1;

   
    //console.log('Not enough to up percent');
  } //Percent up, GPA = 0
  else{
  
    let txtPoint = parseInt(specialSupport.style.width);
    specialSupport.style.width = `${(txtPoint + 10)}%`;
    specialSupportGPA = 0;
    //console.log('Percent UP');
    //Ready to use special support
    if(specialSupport.style.width === '100%'){
      arrow.className = '';
      arrow.className += 'btn btn-outline-danger';
      document.getElementById('support-normal').style.display = "none";
      document.getElementById('support-supper').style.display = "inline";
      superSupport = true;
      console.log('Special Support Active');
    }
  }
  console.log(superSupport);
}

function checkExistSpecialClass(e=document.body,className='unknow'){
  return e.classList.contains(className);
 }
 //Btn Continue
 btnContinue.addEventListener('click', (event) => {
   gameStatus = true;
   //console.log(`Game Status: ${gameStatus}`);
   btnContinue.style.display = 'none';
   btnStop.style.display = 'inline';
   answer.focus();
   startStatus = true;
   f1();
   document.getElementById('point-status-blur').style.display = "none";
   document.getElementById('point-status-smile').style.display = "inline";
   document.getElementById('point-status-angry').style.display = "none";
   document.getElementById('btnShop').style.display = "none";
   document.getElementById('btnSetting').style.display = "none";
 });
 
 //Btn Stop
 btnStop.addEventListener('click', (event) => {
   gameStop();
   music.muted=true;
   btnContinue.style.display = 'inline';
   btnStop.style.display = 'none';
 });
 
 //Btn Restart
 btnRestart.addEventListener('click', (event) => {
   var elements = document.querySelectorAll('.word');
   screenPlay.innerHTML = '';
   document.getElementById('point-status-blur').style.display = "inline";
   document.getElementById('point-status-smile').style.display = "none";
   document.getElementById('point-status-angry').style.display = "none";
 music.muted=true;
 });
 //Setting volume:
 document.querySelector('#bgmusic').addEventListener('change',(e)=>{
  if(!e.target.checked){
      music.muted = true;
      document.querySelector('#icon_loa').classList = 'fas fa-volume-mute'
  }
  else{
      music.play();
      music.muted = false;
     
      document.querySelector('#icon_loa').classList = 'fas fa-volume-up'
      
  }
})
 
 // Stop game: but hidden button
 function gameStop(){
   let prevPoint = parseInt(point.value);
   updateCurrentPoint(prevPoint);
   startStatus = false;
   clearInterval(start);
   pointLevel = 0;
   point.value = 0;
   level = 5000;
   gameStatus = false;
   support = false;
   superSupport = false;
   arrow.className = 'btn btn-outline-info';
   document.getElementById("arrows").disabled = false;
   document.getElementById('support-normal').style.display = "inline";
   document.getElementById('support-supper').style.display = "none";
   specialSupport.style.width = `${90}%`;
   document.getElementById('btnShop').style.display = "inline";
   document.getElementById('btnSetting').style.display = "inline";
   document.getElementById('point-status-blur').style.display = "none";
   document.getElementById('point-status-smile').style.display = "none";
   document.getElementById('point-status-angry').style.display = "inline";
 }
 
 //Interval game play
 function f1(){
   if(gameStatus){
     //Check prePoint and pointLevel, if true -> level up
     if(prePoint - pointLevel === 10){
       pointLevel = prePoint;
       levelUp = true;
     }

     //Update level(time)
     clearInterval(start);
     if (levelUp){
       changeTime();
       levelUp = false;
     }
     
     start = setInterval(() => {
       f1();
       gamePlay();
       music.play();
       music.muted = false;
     }, level);
   }
 }
 
 //Update point got by user
 function updateCurrentPoint(prevPoint) {
    currentPoint += prevPoint;
    storeCurrentPoint.textContent = currentPoint;
 }

 //Btn Pause
 btnPaused.addEventListener('click', (event) => {
   clearInterval(start);
   document.querySelectorAll('.word').forEach((bubble) => {
    if (bubble.style.webkitAnimationPlayState === "paused") {
        bubble.style.webkitAnimationPlayState = "running";
        f1();
        startStatus = true;
        music.muted = false;
    }else if(bubble.style.webkitAnimationPlayState === "running" || bubble.style.webkitAnimationPlayState === ""){
        bubble.style.webkitAnimationPlayState = "paused"; // assuming you want to toggle
        startStatus = false;
         music.muted = true;
    }
   });
 });
 
 //Change level(time) went level up
 function changeTime(){
   if (level !== 1000){
     level = level - 1000;
   }
 }
 
 //Check type of bubble
 function checkBubble(txtType = 'normal', element, result){
   prePoint = parseInt(point.value);
   switch(txtType){
     case 'trap':{
       gameStop();
       break;
     }
     default:{
       if (element.innerHTML === result){
          screenPlay.removeChild(element);
        
         pointUp(txtType);
       }
       break;
     }
   }
 }
 
 //Up to point
 function pointUp(txtType = 'normal'){
   prePoint = parseInt(point.value);
   switch (txtType) {
     case 'star': {
       point.value = prePoint + 2;
       tick.play();
       break;
     }
     default:{
       point.value = prePoint + 1;
       tick.play();
       break;
     }
   }
   updateValue(point);

 }
 
 //Create bubble and append to screen play
 //'data-before' is content, use to check type of bubble
 //trap: skip, star: 2point + 1arrow, normal: 1point
 //Ratio is 6: 3normal, 2star, 1trap
 function createBubble(){
  //  let arrJPWord = ConfigBoard.getHirigana(screen.width);
   let arrJPWordKeys = Array.from(arrJPWord.values());
   backgroundBubble = [...listColorPicked.values()];
   div = document.createElement('div');
   div.className = 'word bubble-layout';
   div.textContent = arrJPWordKeys[Math.floor(Math.random() * arrJPWordKeys.length)];
   div.style.left = `${Math.floor(Math.random() * (window.screen.width - 55)) + 10}px`;
   div.style.background = `linear-gradient(to right top, ${backgroundBubble.toString()})`;
   div.setAttribute('data-tick', 'none');
   randStarBubble = Math.floor(Math.random() * 6) + 1;
   switch (randStarBubble){
     case 1: {
       div.setAttribute('data-before', 'trap');
       div.style.background = `linear-gradient(to right top,#8c8c8c,#808080,#737373,#666666,#595959)`;
       break;
     } 
     case 2:
     case 3: {
       div.style.color = '#000';
       div.style.background = `linear-gradient(to right top,#ffffe6,#ffffcc,#ffffb3,#ffff99,#ffff80)`;
       div.setAttribute('data-before', 'star');
       break;
     } 
     default: {
       div.setAttribute('data-before', 'normal');
     }

   }
   screenPlay.appendChild(div);
   //Get and print content of bubble
   //console.log(window.getComputedStyle(div).content);
 }
 
 function checkAnswer(element, listBubble){
  //  let arrJPWord = ConfigBoard.getHirigana(screen.width);
   console.log(arrJPWord);
   let answerInput = element.value;
   if (arrJPWord.get(answerInput)){
      let result = arrJPWord.get(answerInput);
      listBubble.forEach((element) => {
         if (element.getAttribute('data-tick') !== 'tick') {
           let txtType = element.getAttribute('data-before');
           checkBubble(txtType, element, result);
         } 
      });
      element.focus();
    } else {
      //Case type Blank
      console.log('Blank');
      element.focus();
    }
 }
 
 //Gameplay:note
 function gamePlay(){
   createBubble();
   var demo = document.querySelectorAll('.word');
   //Arrows support event(click)
   arrow.addEventListener('click', (event) => {
     let check = checkExistSpecialClass(arrows, 'btn-outline-danger');
     if(check && superSupport){
        screenPlay.innerHTML = '';
        superSupport = false;
        arrow.classList.replace('btn-outline-danger','btn-outline-info');
        specialSupport.style.width = `${0}%`;
        document.getElementById('support-normal').style.display = "inline";
        document.getElementById('support-supper').style.display = "none";
     } else {
       if (support) {
         support = false;
         arrow.classList.replace('btn-outline-warning','btn-outline-info');
        
       } else {
         support = true;
         arrow.classList.replace('btn-outline-info','btn-outline-warning');
       
       }
     }
   });
 
   
   //Loop bubbles 
   demo.forEach((element) => {
     let txtType = element.getAttribute('data-before');
     //Event(click) on bubble after use arrows support
      element.addEventListener('click', (event) => {
        let turnQty = defaultTurn;
        if (support == true && turnQty > 0){
          console.log("Have support ...");
          screenPlay.removeChild(element);
          tick.play();
          if (txtType !== 'trap') pointUp(txtType);
          support = false;
          arrow.classList.replace('btn-outline-warning','btn-outline-info');
          turn.textContent = turnQty - 1;
          defaultTurn--;
          console.log(defaultTurn);
          answer.focus();
        } else {
          console.log("No support ...");
          if(startStatus) {
            //Comment Fail -- function tick on bubble
            if (element.getAttribute('data-tick') === 'none') {
              element.setAttribute('data-tick', 'tick');
              element.classList.add("bubble--tick");
            } else {
              element.setAttribute('data-tick', 'none');
              element.classList.remove("bubble--tick");
            }  
            console.log(element.getAttribute('data-tick')); 
          }
        }
      });
      
      //Event check end animation of bubble, get last position top
      element.addEventListener('animationend', function (event) {
         const svgRect = this.getBoundingClientRect();
         let txtType = element.getAttribute('data-before');
         let tick = element.getAttribute('data-tick');
         let endLimitPosition = parseInt(svgRect.top);
         if (endLimitPosition) {
           if (tick !== 'tick') {
             gameStop();
           } else {
             if (txtType !== 'trap') {
               gameStop();
             } else {
               screenPlay.removeChild(element);
             }
           }
         }
      });
   });
   
   
   //Event(keyCode = Enter) get answer, check and remove bubbles valid
   answer.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      checkAnswer(answer, demo);
    }
  });
}

//Info Store Item
let storeArrow = new Map();
storeArrow.set(0, {name: "毛利元就", price: 2, arrowQty: 2})
.set(1, {name: "武田信玄", price: 4, arrowQty: 4})
.set(2, {name: "上杉謙信", price: 8, arrowQty: 8})
.set(3, {name: "織田信長", price: 10, arrowQty: 12});
let itemInfo;
const itemName = document.getElementById('itemName');
const itemPrice = document.getElementById('itemPrice');
const itemQty = document.getElementById('itemQty');
const mainItemImg = document.getElementById('mainItemImg');
const storeItems = document.querySelectorAll('.storeItem');
const btnBuy = document.getElementById('btnBuy');

//Click item and show info
storeItems.forEach((item,index) => {
  item.addEventListener('click', () => {
    itemInfo = storeArrow.get(index);
    itemName.textContent = itemInfo.name;
    itemPrice.textContent = itemInfo.price;
    itemQty.textContent = itemInfo.arrowQty;
    let itemImg = item.src;
    mainItemImg.src = itemImg;
  });
});

//Btn buy
btnBuy.addEventListener('click', () => {
  if(itemInfo === undefined) {
    alert("Pls pick your favorite item !!!");
  } else {
    if (confirm('Are you sure you want to buy ?')) {
      if (currentPoint >= itemInfo.price) {
        let txtTurn = defaultTurn + itemInfo.arrowQty;
        let txtPrice = itemInfo.price * -1;
        updateCurrentPoint(txtPrice);
        defaultTurn = txtTurn;
        turn.textContent = defaultTurn;
      } else {
        alert("You can't buy !!!");
      }
    } 
  }
});