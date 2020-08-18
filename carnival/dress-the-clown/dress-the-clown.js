// JAVASCRIPT CARNIVAL //

console.log("Dress The Clown!")

window.onload = function () {
    imgToCanvas(); //draw initial image to canvas
}

//so we can cycle through all body parts and change their clothing dynamically on one line
var bodyPart = ['head', 'body', 'shoes'];
var bodyPartNum = 1; //tracker for if it's head (1), body (2) or shoes (3)
var imageNum = 1; //tracker for clothing number (6 clothings each body part)

var headElement = document.getElementById("head");
var bodyElement = document.getElementById("body");
var shoesElement = document.getElementById("shoes");

var currentBodyPart = document.getElementById(bodyPart[bodyPartNum]);

function changeClothing() {
    //to cycle selected clothing image
    if (imageNum > 5) imageNum = 0;
    if (imageNum < 0) imageNum = 5;

    //to cycle selected body part
    if (bodyPartNum > 2) bodyPartNum = 0;
    if (bodyPartNum < 0) bodyPartNum = 2;

    //updates clothing determined by bodypart array and image number
    currentBodyPart = document.getElementById(bodyPart[bodyPartNum]);
    currentBodyPart.src = 'images/' + bodyPart[bodyPartNum] + imageNum + '.png';

    //updates html label to show which part is being changed
    var selectedID = document.getElementById('bodyPart');
    selectedID.innerHTML = bodyPart[bodyPartNum];
}

document.addEventListener("keydown", function (event) {
    //assigned keycodes to readable names
    let rightArrow = 39;
    let leftArrow = 37;
    let upArrow = 38;
    let downArrow = 40;

    //for changing image number via right and left arrow keys
    if (event.keyCode === rightArrow) imageNum++; //cycle right
    else if (event.keyCode === leftArrow) imageNum--; //cycle left

    //for changing selected body part via up and down arrow keys
    if (event.keyCode === upArrow) bodyPartNum--; //cycle down the body
    else if (event.keyCode === downArrow) bodyPartNum++; //cycle up the body

    changeClothing();
});

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
// canvas.style.display = "none"; //hides canvas as we only use it when we click download

//converting image to canvas so we can download it as stitched together .png
function imgToCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var headCanvasObj = new Image();
    var bodyCanvasObj = new Image();
    var shoesCanvasObj = new Image();
    headCanvasObj.src = headElement.src;
    bodyCanvasObj.src = bodyElement.src;
    shoesCanvasObj.src = shoesElement.src;
    ctx.font = "30px Arial";
    ctx.drawImage(bodyCanvasObj, 20, 50, 350, 350 * bodyCanvasObj.height / bodyCanvasObj.width);
    ctx.drawImage(headCanvasObj, 20, 50, 350, 350 * headCanvasObj.height / headCanvasObj.width);
    ctx.drawImage(shoesCanvasObj, 20, 50, 350, 350 * shoesCanvasObj.height / shoesCanvasObj.width);
}

function updateCanvas() {
    imgToCanvas();
}

//for Downloading the img, runs on click <a> tag
function downloadImg() {
    document.getElementById("downloader").download = "image.png";
    document.getElementById("downloader").href = document.getElementById("myCanvas").toDataURL("image/png").replace(/^data:image\/[^;]/, 'data:application/octet-stream');
}