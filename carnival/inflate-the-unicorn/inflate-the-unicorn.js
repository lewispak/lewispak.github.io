/// -    -   -   -   -  //
/// JAVASCRIPT CARNIVAL //
/// -    -   -   -   -  //

console.log("Inflate The Unicorn!")

let imgs = [
    "images/unicorn-0.png", "images/unicorn-1.png", "images/unicorn-2.png", "images/unicorn-3.png"
]

let unicorns = document.querySelectorAll(".container .inflate-an-image");
let unicornWinAudio = document.querySelector("#unicornWinAudio");
let unicornClickAudio = document.querySelector("#unicornClickAudio");

for (let i = 0; i < unicorns.length; i++) {
    let count = 0;
    unicorns[i].addEventListener('click', function () {
        count++;
        unicorns[i].src = imgs[count];
        if (count === 3) {
            count = 0;
            unicornWinAudio.play();
        } else {
            unicornClickAudio.play();
        }
    });
}