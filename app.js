const square = document.querySelectorAll(".square");
const mole = document.querySelector('.mole')
const scoreboard = document.querySelector('#score')
const start = document.querySelector('.start')
const end = document.querySelector('.stop')
let score = 0;
let randomOne;

function randomSquare() {
    square.forEach(element => {
        element.classList.remove("mole")    
    })

    randomOne = square[Math.floor(Math.random() * 9)]
    randomOne.classList.add("mole")
}

square.forEach(tt => {
    tt.addEventListener('mousedown', () => {
        if (tt.classList.contains("mole") == true) {
            score += 1;
        }
        else {
            score += -1;
        }
        scoreboard.innerText = `Score: ${score}`
    })
})

function moleMove() {
    let timer = setInterval(randomSquare, 750)
    end.addEventListener('mousedown', () => {
        clearInterval(timer)
        square.forEach(element => {
            element.classList.remove("mole")    
        })
    })
}

start.addEventListener('mousedown', moleMove)





