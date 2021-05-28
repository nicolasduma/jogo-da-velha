document.addEventListener("DOMContentLoaded", () => {
    const conteiner = document.querySelectorAll("#conteiner") 

    applyEventOnBtnsTypeGame()
})

function applyEventOnBtnsTypeGame() {
    document.querySelectorAll(".button-select-type-game").forEach(element => {
        element.addEventListener("click", handleSelectTypeGame)
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

    comeMenu()

    document.querySelectorAll(".emojis-select").forEach((emoji) => {

        emoji.onclick = selectionOfEmoji

    })

    document.getElementById("btn-start-game").onclick = () => {
        console.log(selectedEmojis)
    }
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

function comeMenu() {
    document.getElementById("btn-come-menu").addEventListener("click", () => {

        typeGame = originalTypeGame

        selectedEmojis = {e0: null, e1: null}

        conteiner.innerHTML = contentConteinerInitPage

        applyEventOnBtnsTypeGame()
    })
}
