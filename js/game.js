let bord = ["", "", "", "", "", "", "", "", ""]
let playerTime = 0
let gameOver = false
const symbols = ["shield", "sword"]

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
    }

    if (bord[position] === "") {
        bord[position] = symbols[playerTime]

        gameOver = isWin()

        if (!gameOver) {
            playerTime = (playerTime == 1) ? 0 : 1  
        }
    }

    return gameOver

}

function isWin() {
    for (let i in winStages) {
        let sequence = winStages[i]

        let position1 = sequence[0]
        let position2 = sequence[1]
        let position3 = sequence[2]

        if (bord[position1] === bord[position2] && 
            bord[position1] === bord[position3] && 
            bord[position1] !== "") {
                return true
            } 
    }
    
    return false
}
