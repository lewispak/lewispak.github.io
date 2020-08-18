// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Whack-a-Mole!")

let table = document.getElementsByTagName("table");
// console.log(table[0]); //first table (there's only one)
// console.log(table[0].rows[0]); //first table, first row
// console.log(table[0].rows[0].cells[0]); //first table, first row, first cell

//gets random row and cell to put mole in later
var randomRow = getRandomInt(table[0].rows.length); //random row, ceiling is it's length
var randomCell = getRandomInt(table[0].rows[0].cells.length); //random cell, ceiling is it's length

//user gets a point if they have clicked the mole
var score = 0;

window.onload = function () {
    startGame();
};

function startGame() {
    placeMole();
    clickControls();
}

function whackedMole() {
    table[0].rows[randomRow].cells[randomCell].innerHTML = ""; //clears the mole

    //stores mole's previous spot so our it can be compared to the next random one and ensure diff spot
    let prevRow = randomRow;
    let prevCell = randomCell;

    //randomises the spot for our mole
    randomRow = getRandomInt(table[0].rows.length); //random row, ceiling is row length
    randomCell = getRandomInt(table[0].rows[0].cells.length); //random cell, ceiling is cells length

    //keep randomising a new pot until it's different to the previous spot
    while (prevRow === randomRow || prevCell === randomCell) {
        randomRow = getRandomInt(table[0].rows.length);
        randomCell = getRandomInt(table[0].rows[0].cells.length);
    }

    placeMole();
}

//a timer to count down from 10seconds until a gameover or score alert pops up
var seconds = 0;
var finalScore = 0;
var highScore = 0;
var timer = setInterval(() => {
    //gameover at 10 seconds, give alert to score as well
    if (seconds > 10) {
        finalScore = score;
        if (finalScore > highScore) highScore = finalScore;
        alert(`Gameover, score: ${finalScore}, highscore: ${highScore}`);
        seconds = 0;
        score = 0;
    }

    //show timer on screen
    document.getElementById("timer").innerHTML = seconds++;
    //update score on finished game
    document.getElementById("score").innerHTML = score;

}, 1000);

function clickControls() {
    //loop through all the cells in the table
    for (let i = 0; i < table[0].rows.length; i++) {
        for (let j = 0; j < table[0].rows[0].cells.length; j++) {
            //add a click function for every cell
            table[0].rows[i].cells[j].addEventListener('click', function () {
                //compare the cell location with our references to the mole
                if (i === randomRow && j === randomCell) {
                    whackAudio.play();
                    document.getElementById("score").innerHTML = ++score;
                    whackedMole(); //if true, then the mole is whacked via whackedMole()
                }
            })
        }
    }
}

function placeMole() {
    //a reference for a random cell for the mole to exist in later
    let moleCell = table[0].rows[randomRow].cells[randomCell];

    //creates element for mole to exist in
    let newImgTag = document.createElement("img"); //new element
    newImgTag.setAttribute("src", "mole.PNG"); //adds new attribute to element

    //adds mole into the random cell as reference above
    moleCell.append(newImgTag); //adds new element, like push()
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)); //doesn't reach max
}