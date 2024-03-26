const dino = document.getElementById("dino");
const cactus1 = document.getElementById("cactus1");
const cactus2 = document.getElementById("cactus2");
const points = document.getElementById("points");
const start = document.getElementById("start");

var score = 0;
let isAlive;
let block_start1;
const start_listener = start.addEventListener('click', onButtonClick);

function onButtonClick() {
    isAlive = setInterval(function () {

        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
        let cactus1Left = parseInt(window.getComputedStyle(cactus1).getPropertyValue("left"));
        let cactus2Left = parseInt(window.getComputedStyle(cactus2).getPropertyValue("left"));

        if (cactus1Left < 50 && cactus1Left > 0 && dinoTop >= 140 || cactus2Left < 50 && cactus2Left > 0 && dinoTop >= 140) {
            alert("Game Over");
            cactus1.remove();
            cactus2.remove();
            fetch("/",{
                method: "POST",
                headers: {
                    'X-CSRFToken': csrftoken,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({score: Math.round(score)}).toString()
            }).then(function() {
                setTimeout(function() {
                    location.reload();
                }, 200);
            });
        }
        else { score += 0.1;
        console.log (Math.round(score));
        document.getElementById("points").innerHTML = Math.round(score);
        }
    }, 10);


    block_start1 = setInterval(function () {
        block1();
        setTimeout (function () {
        block2 ();
        }, 1000);
    }, random());


    start.removeEventListener("click", start_listener);
    start.disabled = true;
}

function jump() {
    if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
        dino.classList.remove("jump");
    }, 500);
}
}

document.addEventListener("keydown", function (event) {
    jump();
});

function block1() {
    if (cactus1.classList != "block") {
    cactus1.classList.add("block");

    setTimeout(function () {
        cactus1.classList.remove("block");
        }, random());
    }
}

function block2() {
    if (cactus2.classList != "block") {
    cactus2.classList.add("block");

    setTimeout(function () {
        cactus2.classList.remove("block");
        }, random());
    }
}

function random() {
    const randomNum = 1000 + Math.random() * 1000;
     return Math.round(randomNum / 100) * 100;
   }
