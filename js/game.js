let bord = ["", "", "", "", "", "", "", "", ""]
let playerTime = 0
let symbols = ["shield", "sword"]

function handleMove(position) {

    if (bord[position] === "") {
        bord[position] = symbols[playerTime]

        if (playerTime == 0) {
            playerTime = 1
        } else if (playerTime == 1) {
            playerTime = 0
        }
    }

}