/* Jake Albee
Prime Number Factorization*/

  var canvas=document.getElementById("canvas");
  var ctx=canvas.getContext("2d");

function placeTop(spot){
   var place = (110*spot) + 15
    ctx.fillStyle = "red"
    ctx.fillRect(place, 15, 80, 15)
}
function placeBottom(spot){
   var place = (110*spot) + 15
    ctx.fillStyle = "red"
    ctx.fillRect(place, 205, 80, 15)
}

function placeMiddle(spot){
   var place = (110*spot) + 15
    ctx.fillStyle = "red"
    ctx.fillRect(place, 110, 80, 15)
}

function placeLeftTop(spot){
   var place = (110*spot) + 15
    ctx.fillStyle = "red"
    ctx.fillRect(place, 30, 15, 80)
}

function placeLeftBottom(spot){
   var place = (110*spot) + 15
    ctx.fillStyle = "red"
    ctx.fillRect(place, 125, 15, 80)
}

function placeRightTop(spot){
    var place = (110*spot) + 80
    ctx.fillStyle = "red"
    ctx.fillRect(place, 30, 15, 80)
}

function placeRightBottom(spot){
  var place = (110*spot) + 80
    ctx.fillStyle = "red"
    ctx.fillRect(place, 125, 15, 80)
}
function drawOne(spot){
  placeRightTop(spot)
  placeRightBottom(spot)
}

function drawTwo(spot){
  placeTop(spot)
  placeBottom(spot)
  placeRightTop(spot)
  placeLeftBottom(spot)
  placeMiddle(spot)
}

function drawThree(spot){
  placeTop(spot)
  placeMiddle(spot)
  placeBottom(spot)
  placeRightTop(spot)
  placeRightBottom(spot)
}

function drawFour(spot){
  placeLeftTop(spot)
  placeRightTop(spot)
  placeMiddle(spot)
  placeRightBottom(spot)

}

function drawFive(spot){
  placeTop(spot)
  placeMiddle(spot)
  placeBottom(spot)
  placeLeftTop(spot)
  placeRightBottom(spot)
}

  
function drawSix(spot){
  placeLeftTop(spot)
  placeMiddle(spot)
  placeLeftBottom(spot)
  placeRightBottom(spot)
  placeBottom(spot)
}

function drawSeven(spot){
  placeTop(spot)
  placeRightTop(spot)
  placeRightBottom(spot)
}
function drawEight(spot){
  placeTop(spot)
  placeBottom(spot)
  placeLeftTop(spot)
  placeLeftBottom(spot)
  placeRightTop(spot)
  placeRightBottom(spot)
  placeMiddle(spot)
}
function drawNine(spot){
  placeTop(spot)
  placeRightBottom(spot)
  placeRightTop(spot)
  placeTop(spot)
  placeMiddle(spot)
  placeLeftTop(spot)
}

function drawZero(spot){
  placeTop(spot)
  placeRightBottom(spot)
  placeRightTop(spot)
  placeBottom(spot)
  placeLeftBottom(spot)
  placeLeftTop(spot)
}

function drawColonTop(){
        ctx.fillStyle="red"
      ctx.beginPath();
      ctx.arc(275,78,20,0,Math.PI+(Math.PI*2)/2,true);
      ctx.fill();
}

function drawColonBottom(){
      ctx.fillStyle="red"
      ctx.beginPath();
      ctx.arc(275,156,20,0,Math.PI+(Math.PI*2)/2,true);
      ctx.fill();
}

function drawColon(){
    drawColonTop()
    drawColonBottom()

}

function drawM(spot){
  //0 = top
  //1 = bottom
 ctx.strokeStyle = "red"
 ctx.lineWidth = 5
  var x = 550+55
  var y = 117.5 * spot + (117.5 - 50)
  ctx.beginPath()
  ctx.moveTo(x,y)
  ctx.lineTo(x+10, y - 40)
  ctx.lineTo(x + 25, y-5)
  ctx.lineTo(x+40, y - 40)
  ctx.lineTo(x+50,y)
  ctx.stroke()
}

function drawP(){
  ctx.fillStyle = "red"
  ctx.font = "65px Verdana";
  ctx.fillText("P", 560, 117.5-50 + 117.5)

}

function drawA(){
  ctx.fillStyle = "red"
  ctx.font = "65px Verdana";
  ctx.fillText("A", 560, 117.5-50)
}

function drawAM(){
drawA()
drawM(0)
}


function drawPM(){
drawP()
drawM(1)
}

img = new Image();

function draw(){
ctx.clearRect(0,0,660,235);

  img.style.opacity = ".25"
  ctx.drawImage(img,0,0);
  var now = new Date()
  var min = now.getMinutes()
  var hr  = now.getHours()
  if (hr>= 12) 
    drawPM()
  else
    drawAM()

  hr = hr>=12 ? hr-12 : hr
  var minone = min%10
  var minten = (min-minone)/10

//Running the switch statement might become resource heavy
  switch (hr){
    case 1:
    drawZero(0)
    drawOne(1)
    break;
    case 2:
    drawZero(0)
    drawTwo(1)
    break;
    case 3:
    drawZero(0)
    drawThree(1)
    break;
    case 4:
    drawZero(0)
    drawFour(1)
    break;
    case 5:
    drawZero(0)
    drawFive(1)
    break;
    case 6:
    drawZero(0)
    drawSix(1)
    break;
    case 7:
    drawZero(0)
    drawSeven(1)
    break;
    case 8:
    drawZero(0)
    drawEight(1)
    break;
    case 9:
    drawZero(0)
    drawNine(1)
    break;
    case 10:
    drawOne(0)
    drawZero(1)
    break;
    case 11:
    drawOne(0)
    drawOne(1)
    break;
    case 12:
    drawOne(0)
    drawTwo(1)
    break;
}

  switch (minten){
    case 0:
    drawZero(3)
    case 1:
    drawOne(3)
    break;
    case 2:
    drawTwo(3)
    break;
    case 3:
    drawThree(3)
    break;
    case 4:
    drawFour(3)
    break;
    case 5:
    drawFive(3)
    break;
}
  switch (minone){
    case 0:
    drawZero(4)
    case 1:
    drawOne(4)
    break;
    case 2:
    drawTwo(4)
    break;
    case 3:
    drawThree(4)
    break;
    case 4:
    drawFour(4)
    break;
    case 5:
    drawFive(4)
    break;
    case 6:
    drawSix(4)
    break;
    case 7:
    drawSeven(4)
    break;
    case 8:
    drawEight(4)
    break;
    case 9:
    drawNine(4)
    break;
  }
drawColon()
  }



function main(){
  draw();
  curImg = 1
  changeImg()
  setInterval(draw,10000);
}
var curImg
function changeImg(){

  switch (curImg){
    case 0:
      img.src = "stars.jpg"
    break;
    case 1:
      img.src = "stars2.jpg"
    break;
    case 2:
      img.src = "stars3.jpg"
    break;
    case 3:
      img.src = "stars4.jpg"
    break;
    case 4:
      img.src = "stars5.jpg"
      break;
  }
  if (curImg <= 3)
    curImg = curImg + 1
  else
    curImg = 0

  draw();
};
window.onload = main()