'use strict';

const mainScore0 = document.querySelector('#score--0');
const mainScore1 = document.querySelector('#score--1');
let currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');
let dice = document.querySelector('.dice');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');


const newGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
let activePlayer = 0;
let currentScore = 0;
let mainScore = 0;
let scores = [0,0];

//set base score to 0
mainScore0.textContent = '0';
mainScore1.textContent = '0';

let randomNumber = 0;

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = '0';
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;

        if (activePlayer == 0) {
        player0.classList.add('player--active');
        player1.classList.remove('player--active');
        }
        else {
            player1.classList.add('player--active');
            player0.classList.remove('player--active');
        }
};



let holdScore = function () {
    
    document.getElementById(`current--${activePlayer}`).textContent = '0';
    scores[activePlayer] +=currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    // holdScore == true;
    // currentScore = 0;
    // activePlayer = activePlayer === 0 ? 1 : 0;
};



//roll dice and push the number
rollDice.addEventListener('click', function () {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber);
    dice.src = `dice-${randomNumber}.png`

    if (randomNumber > 1){
        currentScore += randomNumber;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        // player0.classList.add('player--active');
        // player1.classList.remove('player--active');
    }
    else {
        switchPlayer();
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        // player1.classList.add('player--active');
        // player0.classList.remove('player--active');
    }
});

hold.addEventListener('click', function() {
    console.log('HODL Button Clicked!');
    holdScore();
    randomNumber = 0;
    switchPlayer();
});

// if (activePlayer == 0) {
//     player0.classList.add('player--active');
// }
// else {
//     player1.classList.add('player--active');
// }


newGame.addEventListener('click', function() {
    mainScore0.textContent = '0';
    mainScore1.textContent = '0';
    currentScore0.textContent = '0';
    currentScore1.textContent = '0';
    randomNumber = 0;
    switchPlayer();
    scores = [0,0];
});