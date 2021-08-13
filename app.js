var colorvalues;
//defining values of color
colorvalues= document.getElementById('colorvalue');

//function to set background color to buttons
function buttoncolor(button,red,green,blue)
{
    button.setAttribute('style', 'background-color:rgb('+red+', '+green+', '+blue+')');
}
//This variable stores all the buttons
var buttons = document.getElementsByClassName("colorbutton");
buttons[0]
buttoncolor(buttons[0], 0, 255, 255) // changes the color of first button

//This function generates random numbers from 0 to 255
function makecolor()
{
    return Math.round(Math.random()*255);
     
}
//These three variables to set button's color
var red = makecolor();
var green = makecolor();
var blue = makecolor();
buttoncolor(buttons[0], red, green, blue); 



//This variable stores answer
var answermessage = document.getElementById("Answer");

//function to start the game
function startGame()
{
    
    answermessage.innerHTML = ""; //It will clear the message when reset the game
var answerbutton = Math.round(Math.random() * (buttons.length - 1));//this button stores random number


//It sets timer for users to guess the color
  var sec = 15;
var time = setInterval(myTimer, 1000);

function myTimer() {
    document.getElementById('time').innerHTML = sec + "sec left";
    sec--;
    if (sec == -1) {
        clearInterval(time);
        alert("Time out");
    }
}

//for loop can change all the button's color everytime it runs
for(var i=0;i<buttons.length;i++)
{
    var red = makecolor();
    var green = makecolor();
    var blue = makecolor();
    buttoncolor(buttons[i], red, green, blue);
    
     
    if (i === answerbutton)
     {
        colorvalues.innerHTML = `(${red}, ${green}, ${blue})`;//It will display color values
     }

     //clicks to each button and checks wheather guess is correct or not
    buttons[i].addEventListener('click', function(){
        if(this === buttons[answerbutton])
        {
            answermessage.innerHTML = "Correct";
            document.body.style.backgroundColor = "green";//change bg color to green if guess is correct
             
        }
        else{
            answermessage.innerHTML = "Wrong answer! Guess again";
            document.body.style.backgroundColor = "red";//change bg color to red if guess is wrong
        }
    });
    
    }
}

startGame();//calling function 
document.getElementById('resetbutton').addEventListener('click',startGame);//resets the game when clicked
