let score=JSON.parse(localStorage.getItem('score'))||{
    wins : 0,
    losses:0,
    ties:0
};

updateElements();

function playGame(playerMove){  //functions
const computerMove = pickcomputermove();
let result='';
if(playerMove==='rock'){
        if(computerMove ==='rock'){
            result='Tie';
        }
        else if(computerMove ==='Paper'){
            result = 'You lose';
        }
        else if(computerMove ==='Scissors'){
            result = 'You Win';
        }
      }
else if(playerMove==='Paper'){
        if(computerMove ==='rock'){
                result='You Win';
            }
            else if(computerMove ==='Paper'){
                result = 'Tie';
            }
            else if(computerMove ==='Scissors'){
                result = 'You lose';
            }
        
}
else if(playerMove==='Scissors'){
            if(computerMove ==='rock'){
                result='You lose';
            }
            else if(computerMove ==='Paper'){
                result = 'You Win';
            }
            else if(computerMove ==='Scissors'){
                result = 'Tie';
            }
            
}
if(result==="You Win"){
    score.wins++;
}
else if(result==="You lose"){
    score.losses++;
}
else if(result==="Tie"){
    score.ties++;
}

localStorage.setItem('score', JSON.stringify(score));

updateElements();
document.querySelector('.results').innerHTML=result;
document.querySelector('.moves').innerHTML=`You <img src="C:/Users/SSM/Desktop/js/images/${playerMove}-emoji.jpeg" class="move-icon">-<img src="C:/Users/SSM/Desktop/js/images/${computerMove}-emoji.jpeg" class="move-icon">Computer`;

/* alert(`Your move ${playerMove},Computer move ${computerMove}.The result is ${result}
Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}`);*/

}
function updateElements(){
document.querySelector('.score').innerHTML= `Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}`;

}


function pickcomputermove(){   //functions and return statement
let computerMove='';
const randomNumber = Math.random();

//console.log(randomNumber);

if(randomNumber > 0 && randomNumber < 1/3){
computerMove='rock';
}
if(randomNumber > 1/3 && randomNumber < 2/3){
computerMove='Paper';
}
if(randomNumber > 2/3 && randomNumber < 1){
computerMove='Scissors';
}
return computerMove;
}