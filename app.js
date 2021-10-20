// declare variables
var scores, roundScore, activePlayer, isGamePlaying;

// score = {0, 0};
// roundScore = 0;
// activePlayer = 0; //based on zero-based index of scores array

init();

// The document object gives us access to the DOM
// set the current score to the dice random integer
// document.querySelector("#current-0").textContent = dice;
// textContent sets plain text. innerHtml can set HTML tags

// dice = Math.floor(Math.random() * 6) + 1;
// document.querySelector("#current-" + activePlayer).textContent = dice;

// hide the dice on page load
// document.querySelector(".dice").getElementsByClassName.display = "none";

// reset scores to 0 on page load
// document.getElementById("score-0").textContent = "0";
// document.getElementById("score-1").textContent = "0";
// document.getElementById("current-0").textContent = "0";
// document.getElementById("current-1").textContent = "0";

document.querySelector(".btn-roll").addEventListener("click", function () {
    if (isGamePlaying) {
        //generate a random number
        var dice = Math.floor(Math.random() * 6) + 1;

        // display the result
        var diceElement = document.querySelector(".dice");
        diceElement.style.display = "block";
        diceElement.src = "dice-" + dice + ".png";

        // update the round score if the rolled number was not a 1
        if (dice !== 1 ) {
            // add score
            roundScore += dice;
            document.querySelector(
                "#current-" + activePlayer
            ).textContent = roundScore;
        } else {
            // switch to the next player
            // ternary operator
            //    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
            //  reset the score
            // roundScore = 0;

            // reset current score visually
            // document.getElementById("current-0").textContent = "0";
            // document.getElementByid("current-1").textContent = "0";

            // switch active class
            // document.querySelector(".player-0-panel").classList.remove("active");
            // document.querySelector(".player-1-panel").classList.add("active");
            // document.querySelector(".player-0-panel").classList.toggle("active")
            // document.querySelector(".player-1-panel").classList.toggle("active");

            //  // hide the dice again
            // document.querySelector(".dice").style.display = "none";

            nextPlayer();
        }
    }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
    if (isGamePlaying) {
        // add current score to player's global score
        score[activePlayer] += roundScore;
        // update the UI to reflect the game
        document.querySelector("#score-" + activePlayer).textContent = 
        score[activePlayer];
        // check if player won the game
        if (score[activePlayer] >= 100) {
            document.querySelector("#name-" + activePlayer).textContent = "winner";
            // hide the dice again
            document.querySelector(".dice").style.display = "none";
            // remove the active player class
            document
            .querySelector(".player-" + activePlayer + "-panel")
            .classList.add("winner");
            document
            .querySelector(".player-" + activePlayer + "-panel")
            .classList.remove("active");

            // set game playing to false
            isGamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});

function nextPlayer() {
    // switch to the next player
    // ternary operator
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    // reset the roundScore
    roundScore = 0;

    // reset current scores visually
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    // switch active player
    // document.querySelector(".player-0-panel").classList.remove("active");
    // document.queryselector(".player-1-panel").classlist.add("active");
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    // hide the dice again
    document.querySelector(".dice").style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
    // reset player's score
    score = [0, 0];
    // reset active player
    activePlayer = 0;
    // reset round score
    roundScore = 0;

    document.querySelector(".dice").style.display = "none";

    // reset score's to 0 on page load
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    // reset player names

    document.getElementById("name-0").textContent = "player 1";
    document.getElementById("name-1").textContent = "player 2";
    // remove the winner player class and add the active class
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    // add active to player 1
    document.querySelector(".player-0-panel").classList.add("active");

    // set game playing to true
    isGamePlaying = true;
}