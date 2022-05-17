
var randomNumber1 = Math.floor(Math.random()*6)+1;
var x = "images/"+"dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",x);
var randomNumber2 = Math.floor(Math.random()*6)+1;
var y = "images/"+"dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",y);

if(x>y)
document.querySelector("h1").innerHTML="🚩Player1 Wins!";
else if(x<y)
document.querySelector("h1").innerHTML="🚩Player2 Wins!";
else
document.querySelector("h1").innerHTML="😁Draw";