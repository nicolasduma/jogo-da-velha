document.addEventListener("DOMContentLoaded", () => {
    const conteiner = document.querySelectorAll("#conteiner") 

    applyEventOnBtnsTypeGame()
})

function applyEventOnBtnsTypeGame() {
    document.querySelectorAll(".button-select-type-game").forEach(button => {
        button.addEventListener("click", handleSelectTypeGame)
    })
}

let selectedEmojis = {e0: null, e1: null}

function handleSelectTypeGame(event) {
    typeGame = event.target.id === "player-player" ? true : false
    selectedEmojis = {e0: "programmer", e1: typeGame ? "cowboy" : "robot"}

    updateScreenSecondContent()
}

function updateScreenSecondContent() {
    conteiner.innerHTML = contentConteinerSecondPage

    if (!typeGame) {
        document.getElementById("desc-selection-emoji-one").innerText = "Jogador:"
        document.getElementById("desc-selection-emoji-two").innerText = "Computador:"
    }

    comeToMenu()

    goToStartGame()

    document.querySelectorAll(".emojis-select").forEach((emoji) => {

        emoji.onclick = selectionOfEmoji

    })
}

function selectionOfEmoji() {
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
        sympols = []

        conteiner.innerHTML = contentConteinerInitPage

        applyEventOnBtnsTypeGame()

    })
}

function goToStartGame() {
    document.getElementById("btn-start-game").addEventListener("click", () => {

        updateScreenThirdContent()

    })
}

function updateScreenThirdContent() {
    conteiner.innerHTML = contentConteinerThirdPage

    comeToMenu()

    selectedEmojis.e0 = "emoji-" + selectedEmojis.e0
    selectedEmojis.e1 = "emoji-" + selectedEmojis.e1

    sympols.push(selectedEmojis.e0)
    sympols.push(selectedEmojis.e1) 

    document.getElementById("scorebord-g1-emoji").classList.add(selectedEmojis.e0)
    document.getElementById("scorebord-g2-emoji").classList.add(selectedEmojis.e1)

    document.querySelectorAll(".squeres-bord").forEach((squere) => {
        squere.addEventListener("click", () => {
            if (!gameOver) {
                handleMove(parseInt(squere.id))

                squere.classList.add(bord[squere.id])
            } 
            
            if (gameOver !== false) {
                setTimeout(() => {
                    alert(`${gameOver} venceu`)
                }, 10)
            }
        })
    })

}
