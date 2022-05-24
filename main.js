// I used the starter code, a forked repo of Randy's code. 
//Bandi Cotton helped me get the display message set up.
//Meka helped me with a bug in my diagonal up right win condition


let boardModel = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null]
]
//counters
let currentPlayer = 1
let numberOfDiscsPlayed = 0

//disc control
const dropDiskIntoColumn = function (columnEl, board, playerNum) {
    const columnIndex = columnEl.id.slice(-1)
    if(columnIsFull(board, columnIndex)){
        return
    }
    // update the boardModel
    for(let row = board.length -1; row >= 0; row--){
        if (board[row][columnIndex] === null) {
            board[row][columnIndex] = playerNum
            break
        }
    }
    //update the HTML
    if (currentPlayer === 2) {
        let locationForDisk = columnEl //location for the new disk
        let disk = document.createElement('div') //creates a new disk
        disk.id = 'diskCSSblack' //attach looks from css
        locationForDisk.appendChild(disk)
        currentPlayer = 1
        numberOfDiscsPlayed++

    } else if (currentPlayer === 1) {
        let locationForDisk = columnEl //location for the new disk
        let disk = document.createElement('div') //creates a new disk   
        disk.id = 'diskCSSwhite' //attach looks from css
        locationForDisk.appendChild(disk)
        currentPlayer = 2
        numberOfDiscsPlayed++
    }
    return currentPlayer
}
const displayMessage = function (message) { 
    let newDiv = document.getElementById("message");
    newDiv.innerHTML = message;
}
const displayCurrentPlayer = function (currPlayer) {
    displayMessage("Current player " + currPlayer)
}

const columnIsFull = function(board, index){
    return board[0][index] !== null
}

const winnerHorizontal = function (board) {
    for (let arr = 0; arr < board.length; arr++) {
        for (let row = 0; row < 4; row++) {
            if ((board[arr][row] === board[arr][row + 1]) &&
                (board[arr][row] === board[arr][row + 2]) &&
                (board[arr][row] === board[arr][row + 3]) &&
                (board[arr][row] !== null)) {
                // console.log(board[arr][row])
                if (board[arr][row] === 1) {
                    setTimeout(function(){alert("Player 1 Wins Horizontal!");}, 900);
                } else if (board[arr][row] === 2) {
                    setTimeout(function(){alert("Player 2 Wins Horizontal!");}, 900);
                }
            }
        }
    }
}
const winnerVertical = function (board) {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < board[row].length; col++) {
            if ((board[row][col] === board[row + 1][col]) &&
                (board[row][col] === board[row + 2][col]) &&
                (board[row][col] === board[row + 3][col]) &&
                (board[row][col] !== null)) {
                // console.log(board[row][col])
                if (board[row][col] === 1) {
                    setTimeout(function(){alert("Player 1 Wins Vertical!");}, 900);
                } else if (board[row][col] === 2) {
                    setTimeout(function(){alert("Player 2 Wins Vertical!");}, 900);
                }
            }
        }
    }
}
const winnerDiagonalDownRight = function (board) { //this works but has an error
    for (let arr = 0; arr < 3; arr++) {
        for (let row = 0; row < 4; row++) {
            if ((board[arr][row] === board[arr + 1][row + 1]) &&
                (board[arr][row] === board[arr + 2][row + 2]) &&
                (board[arr][row] === board[arr + 3][row + 3]) &&
                (board[arr][row] !== null)) {
                console.log(board[arr][row])
                if (board[arr][row] === 1) {
                    setTimeout(function(){alert("Player 1 Wins Diagonal!");}, 900);
                } else if (board[arr][row] === 2) {
                    setTimeout(function(){alert("Player 2 Wins Diagonal!");}, 900);
                }
            }
        }
    }
}

const winnerDiagonalUpRight = function (board) {
    for (let arr = 0; arr < 3; arr++) {
        for (let row = 3; row < board[arr].length; row++) {
            if ((board[arr][row] === board[arr + 1][row - 1]) &&
                (board[arr][row] === board[arr + 2][row - 2]) &&
                (board[arr][row] === board[arr + 3][row - 3]) &&
                (board[arr][row] !== null)) {
                console.log(board[arr][row])
                if (board[arr][row] === 1) {
                    setTimeout(function(){alert("Player 1 Wins Diagonal!");}, 900);
                } else if (board[arr][row] === 2) {
                    setTimeout(function(){alert("Player 2 Wins Diagonal!");}, 900);
                }
            }
        }
    }
}

const determineGameWinner = function (board) { 
    winnerHorizontal(board)
    winnerVertical(board)
    winnerDiagonalDownRight(board)
    winnerDiagonalUpRight(board)
}

const columnClickHandler = function (event) { 
    const columnThatWasClicked = event.currentTarget 
    dropDiskIntoColumn(columnThatWasClicked, boardModel, currentPlayer)
    determineGameWinner(boardModel)
     if (numberOfDiscsPlayed === 42 ) {
        setTimeout(function(){alert("Tie Game!");}, 900);
    }
    displayCurrentPlayer(currentPlayer)
}

const createColumnEventListeners = function () { 
    document.querySelector('#col0').addEventListener('click', columnClickHandler)
    document.querySelector('#col1').addEventListener('click', columnClickHandler)
    document.querySelector('#col2').addEventListener('click', columnClickHandler)
    document.querySelector('#col3').addEventListener('click', columnClickHandler)
    document.querySelector('#col4').addEventListener('click', columnClickHandler)
    document.querySelector('#col5').addEventListener('click', columnClickHandler)
    document.querySelector('#col6').addEventListener('click', columnClickHandler)
}

const displayBoard = function (boardModel) {
}

const initializeGame = function () { 
    displayBoard(boardModel)
    createColumnEventListeners()
    displayCurrentPlayer(currentPlayer)
    displayMessage("Player 1, start us off!")
}

initializeGame() 


