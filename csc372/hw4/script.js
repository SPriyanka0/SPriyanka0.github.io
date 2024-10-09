const comp = document.querySelector('.question');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const reset = document.querySelector('.reset');

reset.addEventListener("click", () => resetScore());
rock.addEventListener( "click", () => play('rock',randomComp));
paper.addEventListener("click", () => play('paper',randomComp));
scissors.addEventListener("click", () => play('scissors',randomComp));

//global variable to track scores
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

//play(player, randomComp) - takes in player choice and 
//computer choice and displays results after 3 seconds to match 
//computer's "3 seconds of thinking"
function play(player, randomComp){
    const compPlay = randomComp();
    //test
    console.log(`Player: ${player}`);
    console.log(`Computer: ${compPlay}`);
    
    let result; //to display result
    if(player === compPlay){
        result = "Tie!";
        tieScore++;
    }else if(
        (player === 'rock' && compPlay === 'scissors') ||
        (player === 'paper' && compPlay === 'rock') ||
        (player === 'scissors' && compPlay === 'paper')){
        result = "Player Wins!";
        playerScore++;
    }else{
        result = "Computer Wins!";
        computerScore++;
    }
    //test
    console.log(`Result: ${result}`);
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
    //print on web
    setTimeout(()=>{
        const resultText = document.querySelector('.result'); 
        resultText.textContent = result;
        const pScore = document.querySelector('.playerScore');
        pScore.textContent = playerScore;
        const cScore = document.querySelector('.computerScore');
        cScore.textContent = computerScore;
        const tScore = document.querySelector('.tie');
        tScore.textContent = tieScore;
    },3000);
}
//randomComp() - randomizes computer throw and displays after 3 seconds
function randomComp(){
    //randomize 
    const options = ['rock', 'paper', 'scissors'];
    const compPlay = options[Math.floor(Math.random()*3)];
    setTimeout(() =>{
        comp.src = `/csc372/hw4/photos/${compPlay}.PNG`;
    },3000); 
    return compPlay;
}

//resetScore() - resets gameplay
function resetScore(){
    const comp = document.querySelector('.question');
    console.log('Reset Score');
    //reset variable
    playerScore = 0;
    computerScore = 0;
    tieScore = 0;
    //reset image
    comp.src = `/csc372/hw4/photos/question-mark.png`;
    //reset score on display
    const pScore = document.querySelector('.playerScore');
    pScore.textContent = playerScore;
    const cScore = document.querySelector('.computerScore');
    cScore.textContent = computerScore;
    const tScore = document.querySelector('.tie');
    tScore.textContent = tieScore;
}