var player1Score = 0; //Score of Player 1
var player2Score = 0; //Score of Player 2
var playerTurn = true; //To switch and track Player
var player1WinCalculation = []; //Calculate the moves of the player 1
var player2WinCalculation = []; //Calculate the moves of player 2
// Keep track of the blocks
var blocks = ['block-1', 'block-2', 'block-3', 'block-4', 'block-5', 'block-6', 'block-7', 'block-8', 'block-9'];
var victory = false;

// Function to Initialize the game and the parameters
function startGame() {
    document.getElementById('Play_button_field').style.display = 'none';
    document.getElementById('PlayerArena').style.display = 'contents';
    document.getElementById('PlayersStatusArea').style.display = 'contents';
    document.getElementById('player1ScoreField').innerHTML = player1Score;
    document.getElementById('player2ScoreField').innerHTML = player2Score;
    if (playerTurn) {
        document.getElementById('Status').innerHTML = "Lets Start, Player 1 turn";
    }
    else {
        document.getElementById('Status').innerHTML = "Lets Start, Player 2 turn";
    }
}


// Main function to Procede game on block click
function proceedGame(blockValue, blockId) {
    if (blocks.includes(blockId)) {
        removeIndex(blockId);
        if (playerTurn) {
            console.log('In 1');
            document.getElementById('Status').innerHTML = "Player 2 turn";
            document.getElementById(blockId).innerHTML = "X";
            calculateBlocks(blockValue, playerTurn);
            if (calculateVictory(player1WinCalculation)) {
                document.getElementById('Status').innerHTML = "Player 1 WINS🎉";
                victory = true;
                player1Score++;
                document.getElementById('player1ScoreField').innerHTML = player1Score;
                showGameRestart();
            }
        }
        else {
            console.log('In 2');
            document.getElementById('Status').innerHTML = "Player 1 turn";
            document.getElementById(blockId).innerHTML = "O";
            calculateBlocks(blockValue, playerTurn);
            if (calculateVictory(player2WinCalculation)) {
                document.getElementById('Status').innerHTML = "Player 2 WINS🎉";
                victory = true;
                player2Score++;
                document.getElementById('player2ScoreField').innerHTML = player2Score;
                showGameRestart()
            }

        }
        console.log('out');

        if ((blocks.filter(x => x === -1).length) == 9 && victory !== true) {
            console.log('In draw');
            document.getElementById('Status').innerHTML = "Its a Draw";
            showGameRestart();
        }
        playerTurn = !playerTurn;
    }
}
// Function removes the block so that it cannot be clicked again
function removeIndex(blockId) {
    let index = blocks.indexOf(blockId);
    blocks[index] = -1;
}

// Function to calculate the victory for the player
function calculateBlocks(blockValue, playerTurn) {
    if (playerTurn) {
        player1WinCalculation.push(blockValue);
    }
    else {
        player2WinCalculation.push(blockValue);
    }

    // console.log(player1WinCalculation, player2WinCalculation);
}

// Function check whether player has achieved victory
function calculateVictory(playerBlocks) {
    if (playerBlocks.includes(1) && playerBlocks.includes(2) && playerBlocks.includes(3)) {
        document.getElementById('block-1').style.color = 'red';
        document.getElementById('block-2').style.color = 'red';
        document.getElementById('block-3').style.color = 'red';
        return true;
    }
    else if (playerBlocks.includes(4) && playerBlocks.includes(5) && playerBlocks.includes(6)) {
        document.getElementById('block-4').style.color = 'red';
        document.getElementById('block-5').style.color = 'red';
        document.getElementById('block-6').style.color = 'red';
        return true;
    }
    else if (playerBlocks.includes(7) && playerBlocks.includes(8) && playerBlocks.includes(9)) {
        document.getElementById('block-7').style.color = 'red';
        document.getElementById('block-8').style.color = 'red';
        document.getElementById('block-9').style.color = 'red';
        return true;
    }
    else if (playerBlocks.includes(1) && playerBlocks.includes(4) && playerBlocks.includes(7)) {
        document.getElementById('block-1').style.color = 'red';
        document.getElementById('block-4').style.color = 'red';
        document.getElementById('block-7').style.color = 'red';
        return true;
    }
    else if (playerBlocks.includes(2) && playerBlocks.includes(5) && playerBlocks.includes(8)) {
        document.getElementById('block-2').style.color = 'red';
        document.getElementById('block-5').style.color = 'red';
        document.getElementById('block-8').style.color = 'red';
        return true;
    }
    else if (playerBlocks.includes(3) && playerBlocks.includes(6) && playerBlocks.includes(9)) {
        document.getElementById('block-3').style.color = 'red';
        document.getElementById('block-6').style.color = 'red';
        document.getElementById('block-9').style.color = 'red';
        return true;
    }
    else if (playerBlocks.includes(1) && playerBlocks.includes(5) && playerBlocks.includes(9)) {
        document.getElementById('block-1').style.color = 'red';
        document.getElementById('block-5').style.color = 'red';
        document.getElementById('block-9').style.color = 'red';
        return true;
    }
    else if (playerBlocks.includes(3) && playerBlocks.includes(5) && playerBlocks.includes(7)) {
        document.getElementById('block-3').style.color = 'red';
        document.getElementById('block-5').style.color = 'red';
        document.getElementById('block-7').style.color = 'red';
        return true;
    }
    else {
        return false;
    }
}

// Show restart Page of the game on events like draw on victory
function showGameRestart() {
    document.getElementById('Again_buttons_field').style.display = 'contents';
    document.getElementById('Play_button_field').style.display = 'none';
    document.getElementById('PlayerArena').style.display = 'contents';
    document.getElementById('PlayerArena').style.pointerEvents = 'none';
}

// Continue/ Restart the game
function restartGame() {
    setBlocksToNull();
    document.getElementById('Again_buttons_field').style.display = 'none';
    document.getElementById('PlayerArena').style.display = 'contents';
    document.getElementById('PlayerArena').style.pointerEvents = 'auto';

    document.getElementById('Status').innerHTML = "Another Game, Player 1 turn";

    // SEttting Required variables to start again
    playerTurn = true; //To switch and track Player
    player1WinCalculation = []; //Calculate the moves of the player 1
    player2WinCalculation = []; //Calculate the moves of player 2
    // Keep track of the blocks
    blocks = ['block-1', 'block-2', 'block-3', 'block-4', 'block-5', 'block-6', 'block-7', 'block-8', 'block-9'];
    victory = false;
}
// Reset function reset all the game score and take you to the start play button
function resetGame() {
    setBlocksToNull();
    document.getElementById('Again_buttons_field').style.display = 'none';
    document.getElementById('Play_button_field').style.display = 'contents';
    document.getElementById('PlayerArena').style.display = 'none';
    document.getElementById('PlayersStatusArea').style.display = 'none';
    document.getElementById('PlayerArena').style.pointerEvents = 'auto';

    // SEttting Required variables to start again
    player1Score = 0; //Score of Player 1
    player2Score = 0; //Score of Player 2
    playerTurn = true; //To switch and track Player
    player1WinCalculation = []; //Calculate the moves of the player 1
    player2WinCalculation = []; //Calculate the moves of player 2
    // Keep track of the blocks
    blocks = ['block-1', 'block-2', 'block-3', 'block-4', 'block-5', 'block-6', 'block-7', 'block-8', 'block-9'];
    victory = false;
}

//FUnction to set tiktaktoe blocks to null
function setBlocksToNull() {
    document.getElementById('block-1').innerHTML = '';
    document.getElementById('block-2').innerHTML = '';
    document.getElementById('block-3').innerHTML = '';
    document.getElementById('block-4').innerHTML = '';
    document.getElementById('block-5').innerHTML = '';
    document.getElementById('block-6').innerHTML = '';
    document.getElementById('block-7').innerHTML = '';
    document.getElementById('block-8').innerHTML = '';
    document.getElementById('block-9').innerHTML = '';
    resetBlocksColor('rgb(255, 179, 0)');
}

//function to reset colors
function resetBlocksColor(newColor) {
    document.getElementById('block-1').style.color = newColor;
    document.getElementById('block-2').style.color = newColor;
    document.getElementById('block-3').style.color = newColor;
    document.getElementById('block-4').style.color = newColor;
    document.getElementById('block-5').style.color = newColor;
    document.getElementById('block-6').style.color = newColor;
    document.getElementById('block-7').style.color = newColor;
    document.getElementById('block-8').style.color = newColor;
    document.getElementById('block-9').style.color = newColor;
}





