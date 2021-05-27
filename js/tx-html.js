let contentConteinerInitPage = `
<div id="intial-content" class="display-flex justify-content-center align-items-center flex-direction-column">
    <h1>Jogo da Velha</h1>

    <div id="select-game-type"
        class="display-flex justify-content-center align-items-center flex-direction-column">
        <button type="button" class="button-select-type-game" id="player-player">Jogardor VS Jogador</button>

        <button type="button" class="button-select-type-game" id="player-computer">Jogador VS
            Computador</button>
    </div>
</div>
`

let contentConteinerSecondPage = `
<div id="second-content" class="display-flex flex-direction-column justify-content-center align-items-center">
            <h2>Selecione os Emojis</h2>

            <div id="conteiner-select-emojis">
                <div class="content-select-emoji display-flex justify-content-center align-items-center">
                    <p id="selection-emoji-one">Jogador:</p>
                    <ul class="emojis">
                        <li data-selected="false" data-unselectable="false" data-emoji="programmer" data-verse="0" class="emojis-select element-emoji emoji-programmer"></li>
                        <li data-selected="false" data-unselectable="false" data-emoji="cowboy" data-verse="0" class="emojis-select element-emoji emoji-cowboy"></li>
                        <li data-selected="false" data-unselectable="false" data-emoji="robot" data-verse="0" class="emojis-select element-emoji emoji-robot"></li>
                        <li data-selected="false" data-unselectable="false" data-emoji="cat" data-verse="0" class="emojis-select element-emoji emoji-cat"></li>
                        <li data-selected="false" data-unselectable="false" data-emoji="alien" data-verse="0" class="emojis-select element-emoji emoji-alien"></li>
                    </ul>
                </div>

                <div class="content-select-emoji display-flex justify-content-center align-items-center">
                    <p id="selection-emoji-two">Computador:</p>
                    <ul class="emojis">
                        <li data-selected="false" data-unselectable="false" data-emoji="programmer" data-verse="1" class="emojis-select element-emoji emoji-programmer"></li>
                        <li data-selected="false" data-unselectable="false" data-emoji="cowboy" data-verse="1" class="emojis-select element-emoji emoji-cowboy"></li>
                        <li data-selected="false" data-unselectable="false" data-emoji="robot" data-verse="1" class="emojis-select element-emoji emoji-robot"></li>
                        <li data-selected="false" data-unselectable="false" data-emoji="cat" data-verse="1" class="emojis-select element-emoji emoji-cat"></li>
                        <li data-selected="false" data-unselectable="false" data-emoji="alien" data-verse="1" class="emojis-select element-emoji emoji-alien"></li>
                    </ul>
                </div>

            </div>

            <div class="consteiner-buttons display-flex">
                <button type="button" class="default-btn" id="btn-start-game">Iniciar Jogo</button>
                <button type="button" class="default-btn" id="btn-come-menu">Voltar ao Menu</button>
            </div>
        </div>
`
