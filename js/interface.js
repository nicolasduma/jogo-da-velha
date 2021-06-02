document.addEventListener("DOMContentLoaded", () => {
    const conteiner = document.querySelectorAll("#conteiner") 

    applyEventToGameTypeBtns()
})

function applyEventToGameTypeBtns() {
    document.querySelectorAll(".button-select-type-game").forEach(button => {
        button.addEventListener("click", handleTypeGameSelect)
    })
}

let selectedEmojis = {e0: null, e1: null}

function handleTypeGameSelect(event) {
    typeGame = event.target.id === "player-player" ? true : false
    selectedEmojis = {e0: "programmer", e1: typeGame ? "cowboy" : "robot"}

    updateScreenToEmojiSelectionPage()
}

function updateScreenToEmojiSelectionPage() {
    conteiner.innerHTML = contentConteinerEmojiSelectionPage

    if (!typeGame) {
        document.getElementById("desc-selection-emoji-one").innerText = "Jogador:"
        document.getElementById("desc-selection-emoji-two").innerText = "Computador:"
    }

    comeToMenu()
    goToStartGame()

    document.querySelectorAll(".emojis-select").forEach((emoji) => {

        emoji.onclick = emojiSelection

    })
}

function emojiSelection() {
    let emoji = this

    let emojiSelected = (emoji.dataset.selected === "true")
    let emojiUnselectable = (emoji.dataset.unselectable === "true")

    let emojiName = emoji.dataset.emoji
    let emojiVerse = emoji.dataset.verse

    if (!emojiSelected && !emojiUnselectable) {

        document.querySelectorAll(".emojis-select").forEach((otherEmoji) => {

            let otherEmojiName = otherEmoji.dataset.emoji
            let otherEmojiVerse = otherEmoji.dataset.verse

            if (otherEmojiVerse !== emojiVerse) {

                otherEmojiName === emojiName ? otherEmoji.dataset.unselectable = "true" : otherEmoji.dataset.unselectable = "false"

            } else {

                otherEmojiName === emojiName ? otherEmoji.dataset.selected = "true" : otherEmoji.dataset.selected = "false"

            }

            let otherEmojiSelected = (otherEmoji.dataset.selected === "true")
            let otherEmojiUnselectable = (otherEmoji.dataset.unselectable === "true")

            if (otherEmojiSelected) {

                otherEmoji.classList.remove("emoji-unaviable")
                otherEmoji.classList.add("emoji-selected")
                
                otherEmojiVerse === "0" ? selectedEmojis.e0 = otherEmojiName : selectedEmojis.e1 = otherEmojiName

            } else {

                otherEmoji.classList.remove("emoji-selected")
                otherEmojiUnselectable ? otherEmoji.classList.add("emoji-unaviable") : otherEmoji.classList.remove("emoji-unaviable")

            }

        })

    } else {

        return

    }

}

function comeToMenu() {
    document.getElementById("btn-come-menu").addEventListener("click", () => {

        typeGame = null
        bord = ["", "", "", "", "", "", "", "", ""]
        playerTime = 0
        gameOver = false
        sympols = []

        conteiner.innerHTML = contentConteinerTypeGamePage

        applyEventToGameTypeBtns()

    })
}

function goToStartGame() {
    document.getElementById("btn-start-game").addEventListener("click", () => {

        updateScreenToGamePage()

    })
}

function restartGame() {
    document.getElementById("btn-restart-game").addEventListener("click", () => {

        bord = ["", "", "", "", "", "", "", "", ""]
        gameOver = false

        updateScreenToContentStageGameBord()

        gamePlayed++

        playerTime = (gamePlayed % 2) === 0 ? 0 : 1

    })
}

function updateScreenToGamePage() {
    conteiner.innerHTML = contentConteinerGamePage

    comeToMenu()
    restartGame()

    selectedEmojis.e0 = "emoji-" + selectedEmojis.e0
    selectedEmojis.e1 = "emoji-" + selectedEmojis.e1

    sympols.push(selectedEmojis.e0)
    sympols.push(selectedEmojis.e1) 

    document.getElementById("scorebord-g0-emoji").classList.add(selectedEmojis.e0)
    document.getElementById("scorebord-g1-emoji").classList.add(selectedEmojis.e1)

    updateScreenToContentStageGameBord()
}

function updateScreenToContentStageGameBord() {
    document.getElementById("stage-game").innerHTML = contentStageGameBord

    document.querySelectorAll(".squeres-bord").forEach((squere) => {
        squere.addEventListener("click", handleClick)
    })
}


function handleClick(event) {
    let position = event.target.id
    let move = handleMove(position)

    if (move.isWin && bord[position] !== "") {

        for (let element of move.sequense) {
            document.getElementById(element.toString()).classList.add("emoji-selected")
        }

        setTimeout(() => {

            document.getElementById("stage-game").innerHTML = contentStageGameResult
            document.getElementById("result-emojis").innerHTML = `
            <div id="emoji-result" class="element-emoji ${sympols[playerTime === 0 ? 1 : 0]}"></div>`

            addScoreByGame()
            comeToMenu

        }, 500)

    } else if (!gameOver && bord[position] !== "") {
    
        verificTie()

    }
    
    if (bord[position] !== "") {
        document.getElementById(position.toString()).classList.add(bord[position])
    }
}

function addScoreByGame() {
    document.getElementById(`score-g${playerTime === 0 ? 1 : 0}`).innerText = (
        parseInt(document.getElementById(`score-g${playerTime === 0 ? 1 : 0}`).innerText) + 1)
}

function verificTie() {
    let isTie = 0

    for (let position of bord) {
        isTie += position !== "" ? 1 : 0 
    }

    if (isTie === 9) {
        gameOver = true

        setTimeout(() => {

            document.getElementById("stage-game").innerHTML = contentStageGameResult

            document.getElementById("result-emojis").innerHTML = `
                <div id="emoji-result" class="element-emoji ${sympols[0]}"></div>
                <div id="emoji-result" class="element-emoji ${sympols[1]}"></div>
            `

            document.getElementById("txt-result").innerText = "EMPATE!"

        }, 500)
    }
}
