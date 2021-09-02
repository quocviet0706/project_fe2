
 const arrJPWord = new Map();
 arrJPWord.set('1', '一')
.set('2', '二')
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
.set('n','ん'); 
 var level = 5000;
 var support = false;
 var pointLevel = 0;
 var prePoint = 0;
 var start;
 var gameStatus = false;
 var levelUp = false;
 var arrJPWordKeys = Array.from(arrJPWord.values());
 const btnContinue = document.getElementById('btnContinue');
 const btnStop = document.getElementById('btnStop');
 const btnRestart = document.getElementById('btnRestart');
 const screenPlay = document.querySelector('.screen-play');
 const mainScreen = document.querySelector('.main-screen');
 const answer = document.getElementById('answer');
 const point = document.getElementById('point');
 const arrow = document.getElementById('arrow');
 const arrBackground = ['https://www.wallpaperup.com/uploads/wallpapers/2014/02/27/280468/d1d6a188630c17a1bbe502396a5fc61a-375.jpg',
 'https://www.wallpaperup.com/uploads/wallpapers/2012/12/26/26571/c5ef8ee241a2e27a5246beffe60d627b-375.jpg',
 'https://www.wallpaperup.com/uploads/wallpapers/2014/10/30/499820/51000a6feef70ce94ec26900bc1cee30-375.jpg',
 'https://www.wallpaperup.com/uploads/wallpapers/2014/10/30/499827/41af0626fbc99ae835a3d5f520be8f4f-375.jpg'];
 
 //Btn Continue
 btnContinue.addEventListener('click', (event) => {
   gameStatus = true;
   console.log(`Game Status: ${gameStatus}`);
   btnContinue.style.display = 'none';
   btnRestart.style.display = 'inline';
   answer.focus();
   f1();
 });
 
 //Btn Stop
 btnStop.addEventListener('click', (event) => {
   gameStop();
   console.log(`Game Status: ${gameStatus}`);
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
   level = 5000;
   gameStatus = false;
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
 
 //Change level(time) went level up
 function changeTime(){
   if (level !== 1000){
     level = level - 1000;
   }
 }
 
 //Point up
 function pointUp(){
   prePoint = parseInt(point.value);
   point.value = prePoint + 1;
 }
 
 //Gameplay
 function gamePlay(){
   let randStarBubble = Math.floor(Math.random() * 3) + 1;
   var div = document.createElement('div');
   div.className = 'word';
   div.innerHTML = arrJPWordKeys[Math.floor(Math.random() * arrJPWordKeys.length)];
   screenPlay.appendChild(div);
   div.style.left = `${Math.floor(Math.random() * 600) + 100}px`;
   var demo = document.querySelectorAll('.word');
   
   //Arrows support event(click)
   arrow.addEventListener('click', (event) => {
     if(support){
       support = false;
       arrow.style.background = 'none';
     } else {
       support = true;
       arrow.style.background = 'red';
     }
   });
   
   //Loop bubbles 
   demo.forEach((element) => {
     //* console.log(window.getComputedStyle(element).content);
     //Event(click) on bubble after use arrows support
      element.addEventListener('click', (event) => {
        if (support){
          screenPlay.removeChild(element);
          pointUp();
          support = false;
          arrow.style.background = 'none';
        } else {
          console.log("Don't support");
        }
      });
      
      //Event check end animation of bubble, get last position top
      element.addEventListener('animationend', function (event) {
         const svgRect = this.getBoundingClientRect();
         if(svgRect.top === 450) {
           gameStop();
         }
      });
   });
   
   //Event(keyup) check button Enter, get value of input result and check with arrJPWord
   answer.addEventListener('keyup', (event) => {
     if (event.keyCode === 13) {
       let answerInput = answer.value;
       if (arrJPWord.get(answerInput)){
         let result = arrJPWord.get(answerInput);
         demo.forEach((element) => {
           if (element.innerHTML === result){
             screenPlay.removeChild(element);
             pointUp();
           }
         });
         answer.focus();
       } else {
         //Case type Blank
         console.log('Blank');
         answer.focus();
       }
     } /*else {
       //Case button is not Enter
       console.log('Not Enter');
     }*/
   });
 }