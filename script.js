let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertCase(anythingIwant) {
    if(anythingIwant === 'paper') return 'paper';
    if(anythingIwant === 'scissors') return 'scissors';
    return 'Rock';
}

function win(user, computer) {
    userScore++;
    console.log('user score is ' + userScore + ' ' + user);
    userScore_span.innerHTML = userScore;
    const userName = ' (user)'.fontsize(3).sup();
    const compName = ' (comp)'.fontsize(3).sup();
    result_div.innerHTML = `<p>${convertCase(user)}${userName} beats ${convertCase(computer)}${compName}.you win!</p>`;
    const roundStatus = document.getElementById(user);
    roundStatus.classList.add("winningStyles");
    setTimeout(() => roundStatus.classList.remove('winningStyles'), 300);
}

function loses(user, computer) {
    computerScore++;
    console.log('computer score is ' + computerScore + ' ' + computer);
    computerScore_span.innerHTML = computerScore;
    const userName = ' (user)'.fontsize(3).sup();
    const compName = ' (comp)'.fontsize(3).sub();
    result_div.innerHTML = `<p>${convertCase(computer)}${compName} beats ${convertCase(user)}${userName}. you lose!</p>`;
    const roundStatus = document.getElementById(user);
    roundStatus.classList.add('losingStyles');
    setTimeout(() => roundStatus.classList.remove('losingStyles'), 300);
}

function draw(user, computer) {
    const userName = ' (user)'.fontsize(3).sup();
    const compName = ' (comp)'.fontsize(3).sup();
    result_div.innerHTML = `<p>it was a draw! you both chose ${convertCase(user)}</p>`;
    const roundStatus = document.getElementById(user);
    roundStatus.classList.add('drawStyles');
    setTimeout(() => roundStatus.classList.remove('drawStyles'), 300);
}
function game(userChoice) {
    const computerChoice = getComputerChoice();
    console.log('Game function: user choice is = ' + userChoice);
    console.log('Game function: computer choice is = ' + computerChoice);
    switch (userChoice + computerChoice) {
        case 'paperrock':
        case 'rockscissors':
        case 'scissorspaper':
        win(userChoice, computerChoice);
        console.log('user wins');
        break;
        case 'rockpaper':
        case 'scissorsrock':
        case 'paperscissors':
        loses(userChoice, computerChoice);
        console.log('computer wins');
        break;
        case 'rockrock':
        case 'scissorsscissors':  
        case 'paperpaper':
        draw(userChoice, computerChoice);
        console.log('draw');
        break;

    }
}
function main() {
    rock_div.addEventListener('click', () => game('rock'));
    paper_div.addEventListener('click', () => game('paper'));
    scissors_div.addEventListener('click', () => game('scissors'));
}
main();
