let typeGame = null
let bord = ["", "", "", "", "", "", "", "", ""]
let playerTime = 0
let gameOver = false
let sympols = []
let gamePlayed = 0

const winStages = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

function handleMove(position) {
    if (gameOver) {

        return

    } else if (bord[position] === "") {

        bord[position] = sympols[playerTime]

        playerTime = playerTime === 0 ? 1 : 0

        gameOver = verificGameOver()

    }

    return gameOver
}

function verificGameOver() {
    for (let sequence of winStages) {

        if (bord[sequence[0]] === bord[sequence[1]] &&
            bord[sequence[0]] === bord[sequence[2]] &&
            bord[sequence[0]] !== "") {

                return {isWin: true, sequense: [sequence[0], sequence[1], sequence[2]]}

            }
    }

    return false
}

function draw(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}


function computerPlay() {
    let position = draw(0, 8)

    while ((!verificGameOver() || !gameOver) && bord[position] !== "") {
        position = draw(0, 8)
    }

    return position
}