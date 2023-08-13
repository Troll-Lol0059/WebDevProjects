// Fetching Required Elements
var boxes = document.querySelectorAll(".box");
var currentPlayerSpace = document.querySelector(".playerName");
var currentPlayerDiv = document.querySelector(".playerNameDiv");
const newGameButton = document.querySelector(".newGameButton")

// Default Case
var grid = ["", "", "", "", "", "", "", "", ""];
var playerGrid = ["X", "O"];
var currentPlayer = "";

// winning positions
const winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]


function startGame() {
    currentPlayer = playerGrid[0];
    grid = ["", "", "", "", "", "", "", "", ""];

    // ui clear karna hoga 
    boxes.forEach((box)=>{
        box.textContent = "";
        box.classList.remove("win");
    })

    boxes.forEach((box) => {
        box.style.pointerEvents = "all";
    })
    currentPlayerDiv.textContent = "Player - X";
}

startGame();

function changePlayer(playerGrid) {
    if (currentPlayer === playerGrid[0]) {
        currentPlayer = playerGrid[1];
    }
    else {
        currentPlayer = playerGrid[0];
    }
}

function checkWinner(box, index) {
    var winner = "";

    winningPositions.forEach((position) => {
        //all 3 boxes should be non-empty and exactly same in value
        if ((grid[position[0]] !== "" || grid[position[1]] !== "" || grid[position[2]] !== "")
            && (grid[position[0]] === grid[position[1]]) && (grid[position[1]] === grid[position[2]])) {

            //check if winner is X
            if (grid[position[0]] === "X") {
                winner = "X";
            }
            else {
                winner = "O";
            }

            //disable pointer events
            boxes.forEach((box) => {
                box.style.pointerEvents = "none";
            })

            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");   
        }
    });

    // show winner in UI
    if(winner !== ""){
        currentPlayerDiv.textContent=`Player ${winner} Won !!`
        newGameButton.classList.add("active");
        return;
    }

    // Tied Case
    let count = 0;
    grid.forEach((box) => {
        if(box !== "" )
            count++;
    });

    if(count === 9) {
        currentPlayerDiv.textContent = "Game Tied !";
        newGameButton.classList.add("active");
    }
}
 

function handleClick(box, index) {
    box.textContent = currentPlayer;
    box.style.pointerEvents = "none";
    grid[index] = currentPlayer;
    changePlayer(playerGrid);
    currentPlayerDiv.textContent = "Player - " + currentPlayer;

    checkWinner(box, index);
}


boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        handleClick(box, index);
    });
})

newGameButton.addEventListener("click",()=>{
    startGame();
})


