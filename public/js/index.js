const arrJPWord = new Map();
 arrJPWord.set('1', '一');
/*.set('2', '二')
.set('3', '三')
.set('4', '四')
.set('5', '五')
.set('6','六')
.set('7','七')
.set('8','八')
.set('9','九')
.set('10','十')
.set('a','あ')
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
.set('n','ん');*/

 let level = 5000;
 let support = false;
 let superSupport = false;
 let pointLevel = 0;
 let prePoint = 0;
 let start;
 let gameStatus = false;
 let levelUp = false;
 let div, randStarBubble;
 let arrJPWordKeys = Array.from(arrJPWord.values());
 const btnContinue = document.getElementById('btnContinue');
 const btnStop = document.getElementById('btnStop');
 const btnRestart = document.getElementById('btnRestart');
 const btnPaused = document.getElementById('btnPaused');
 const btnSaveChange = document.getElementById('btnSaveChange');
 const screenPlay = document.querySelector('.screen-play');
 const mainScreen = document.querySelector('.main-screen');
 const answer = document.getElementById('answer');
 const point = document.getElementById('point');
 const arrow = document.getElementById('arrows');
 const arrBackground = ['https://www.wallpaperup.com/uploads/wallpapers/2014/02/27/280468/d1d6a188630c17a1bbe502396a5fc61a-375.jpg',
 'https://www.wallpaperup.com/uploads/wallpapers/2012/12/26/26571/c5ef8ee241a2e27a5246beffe60d627b-375.jpg',
 'https://www.wallpaperup.com/uploads/wallpapers/2014/10/30/499820/51000a6feef70ce94ec26900bc1cee30-375.jpg',
 'https://www.wallpaperup.com/uploads/wallpapers/2014/10/30/499827/41af0626fbc99ae835a3d5f520be8f4f-375.jpg'];
 const specialSupport = document.getElementById('specialSupport');
 const customBubble = document.querySelectorAll('.bubble-layout');
 const colorPicked = document.querySelectorAll('.form-control-color');
 let backgroundBubble;
 let specialSupportGPA = 0;
 const listColorPicked = new Map();
 const brightnessValue = document.getElementById('brightnessValue');
const sliderBrightness = document.getElementById('sliderBrightness');
brightnessValue.innerHTML = sliderBrightness.value;
const board = document.getElementById('boardPlay');


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
   backgroundBubble = [...listColorPicked.values()];
   customBubble[0].style.background = `linear-gradient(to right top, ${backgroundBubble.toString()})`;
 });



 //GPA === 10 will up percent, 100% -> ready
 function updateValue(e){
    //GPA not enough to up percent
    if(specialSupportGPA < 2){
      specialSupportGPA += 1;
      //console.log('Not enough to up percent');
    } 
    //Percent up, GPA = 0
    else{
      let txtPoint = parseInt(specialSupport.style.width);
      specialSupport.style.width = `${(txtPoint + 10)}%`;
      specialSupportGPA = 0;
      //console.log('Percent UP');
      //Ready to use special support
      if(specialSupport.style.width === '100%'){
        arrow.className = '';
        arrow.className += 'btn btn-danger';
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
   btnRestart.style.display = 'inline';
   answer.focus();
   f1();
 });
 
 //Btn Stop
 btnStop.addEventListener('click', (event) => {
   gameStop();
   //console.log(`Game Status: ${gameStatus}`);
   btnContinue.style.display = 'none';
   btnRestart.style.display = 'inline';
 });
 
 //Btn Restart
 btnRestart.addEventListener('click', (event) => {
   var elements = document.querySelectorAll('.word');
   screenPlay.innerHTML = '';
   btnContinue.style.display = 'inline';
   btnRestart.style.display = 'none';
 });
 
 
 // Stop game
 function gameStop(){
   console.log('end');
   clearInterval(start);
   pointLevel = 0;
   document.getElementById('point').value = 0;
   level = 1000;
   gameStatus = false;
   support = false;
   superSupport = false;
   arrow.className = 'btn btn-info';
   specialSupport.style.width = `${90}%`;
 }
 
 //Interval game play
 function f1(){
   if(gameStatus){
     //Check prePoint and pointLevel, if true -> level up
     if(prePoint - pointLevel === 10){
       pointLevel = prePoint;
       levelUp = true;
       //Change background
       let backgroundRand = arrBackground[Math.floor(Math.random() * arrBackground.length)];
       mainScreen.style.backgroundImage = `url('${backgroundRand}')`;
    
     }
   
     //Update level(time)
     clearInterval(start);
     if (levelUp){
       changeTime();
     }
     levelUp = false;
     start = setInterval(() => {
       f1();
       gamePlay();
     }, level);
   }
 }
 
 //Btn Pause
 btnPaused.addEventListener('click', (event) => {
   clearInterval(start);
   document.querySelectorAll('.word').forEach((bubble) => {
    if (bubble.style.webkitAnimationPlayState == "paused") {
        bubble.style.webkitAnimationPlayState = "running";
        f1();
    }else if(bubble.style.webkitAnimationPlayState == "running" || bubble.style.webkitAnimationPlayState == ""){
        bubble.style.webkitAnimationPlayState = "paused"; // assuming you want to toggle
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
       break;
     }
     default:{
       point.value = prePoint + 1;
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
   backgroundBubble = [...listColorPicked.values()];
   div = document.createElement('div');
   div.className = 'word bubble-layout pt-4';
   div.innerHTML = arrJPWordKeys[Math.floor(Math.random() * arrJPWordKeys.length)];
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
 
 //Gameplay
 function gamePlay(){
   createBubble();
   var demo = document.querySelectorAll('.word');
   //Arrows support event(click)
   arrow.addEventListener('click', (event) => {
     let check = checkExistSpecialClass(arrows, 'btn-danger');
     if(check){
       if (superSupport){ 
         screenPlay.innerHTML = '';
         superSupport = false;
         arrow.classList.replace('btn-danger','btn-info');
         specialSupport.style.width = `${0}%`;
       }
     } else {
       if (support) {
         support = false;
         arrow.classList.replace('btn-warning','btn-info');
       } else {
         support = true;
         arrow.classList.replace('btn-info','btn-warning');
       }
     }
   });
   
   //Loop bubbles 
   demo.forEach((element) => {
     let txtType = element.getAttribute('data-before');
     //Event(click) on bubble after use arrows support
      element.addEventListener('click', (event) => {
        if (support){
          screenPlay.removeChild(element);
          if (txtType !== 'trap') pointUp(txtType);
          support = false;
          arrow.classList.replace('btn-warning','btn-info');
          answer.focus();
        } else {
          if (element.getAttribute('data-tick') === 'none') {
            element.setAttribute('data-tick', 'tick');
            element.classList.add("bubble--tick");
          } else {
            element.setAttribute('data-tick', 'none');
            element.classList.remove("bubble--tick");
          }  
          console.log(element.getAttribute('data-tick'));
        }
      });
      
      //Event check end animation of bubble, get last position top
      element.addEventListener('animationend', function (event) {
         const svgRect = this.getBoundingClientRect();
         let txtType = element.getAttribute('data-before');
         let tick = element.getAttribute('data-tick');
         //console.log(svgRect.top);
         if (svgRect.top === 550) {
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