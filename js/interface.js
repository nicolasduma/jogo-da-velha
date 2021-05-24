document.addEventListener("DOMContentLoaded", () => {
    let squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        square.addEventListener("click", handleClick)
    })
})

function handleClick(event) {
    let square = event.target

    let position = square.id 

    if (handleMove(position)) {
        setTimeout(() => {
            alert(symbols[playerTime].toUpperCase() + " VENCEU!")
        })
    }
    updateSquares(position)
}

function updateSquares(position) {
    let square = document.getElementById(position.toString())
    let symbol = bord[position]

    if (symbols !== "") {
        square.innerHTML = `<div class='${symbol}'></div>`
    }
}
