let contentConteinerTypeGamePage = `
<div id="type-game-selection-page" class="display-flex justify-content-center align-items-center flex-direction-column open-opacity">
    <h1>Jogo da Velha</h1>

    <div id="select-game-type"
        class="display-flex justify-content-center align-items-center flex-direction-column">
        <button type="button" class="button-select-type-game" id="player-player">Jogardor VS Jogador</button>

        <button type="button" class="button-select-type-game" id="player-computer">Jogador VS Computador</button>
    </div>
</div>
`

let contentConteinerEmojiSelectionPage = `
<div id="emoji-selection-page" class="display-flex flex-direction-column justify-content-center align-items-center open-opacity">
    <h2>Selecione os Emojis</h2>

    <div id="conteiner-select-emojis">
        <div class="content-select-emoji display-flex justify-content-center align-items-center">
            <p id="desc-selection-emoji-one">Jogador 1:</p>
            <ul class="emojis">
                <li data-selected="false" data-unselectable="false" data-emoji="programmer" data-verse="0" class="emojis-select element-emoji emoji-programmer"></li>
                <li data-selected="false" data-unselectable="false" data-emoji="cowboy" data-verse="0" class="emojis-select element-emoji emoji-cowboy"></li>
                <li data-selected="false" data-unselectable="false" data-emoji="robot" data-verse="0" class="emojis-select element-emoji emoji-robot"></li>
                <li data-selected="false" data-unselectable="false" data-emoji="cat" data-verse="0" class="emojis-select element-emoji emoji-cat"></li>
                <li data-selected="false" data-unselectable="false" data-emoji="alien" data-verse="0" class="emojis-select element-emoji emoji-alien"></li>
            </ul>
        </div>

        <div class="content-select-emoji display-flex justify-content-center align-items-center">
            <p id="desc-selection-emoji-two">Jogador 2:</p>
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

let contentConteinerGamePage = `
<div id="game-page" class="display-flex flex-direction-column justify-content-center align-items-center open-opacity">
    <div id="scorebord" class="display-flex justify-content-center align-items-center">
        <div id="scorebord-g0" class="conteiner-score">
            <div id="scorebord-g0-emoji" class="element-emoji scorebord-emoji"></div>

            <div id="score-g0" class="score">0</div>
        </div>

        <div id="scorebord-g1" class="conteiner-score">
            <div id="scorebord-g1-emoji" class="element-emoji scorebord-emoji"></div>

            <div id="score-g1" class="score">0</div>
        </div>
    </div>

    <div id="stage-game" class="display-flex justify-content-center align-items-center">
        
    </div>

    <div class="consteiner-buttons display-flex">
        <button type="button" class="default-btn" id="btn-restart-game">Reiniciar Jogo</button>
        <button type="button" class="default-btn" id="btn-come-menu">Voltar ao Menu</button>
    </div>
</div>
`

let contentStageGameBord = `
<div id="bord" class="display-flex flex-direction-column">
    <div class="line-bord">
        <div id="0" class="element-emoji squeres-bord"></div>
        <div id="1" class="element-emoji squeres-bord"></div>
        <div id="2" class="element-emoji squeres-bord"></div>
    </div>

    <div class="line-bord">
        <div id="3" class="element-emoji squeres-bord"></div>
        <div id="4" class="element-emoji squeres-bord"></div>
        <div id="5" class="element-emoji squeres-bord"></div>
    </div>

    <div class="line-bord">
        <div id="6" class="element-emoji squeres-bord"></div>
        <div id="7" class="element-emoji squeres-bord"></div>
        <div id="8" class="element-emoji squeres-bord"></div>
    </div>
</div>
`

let contentStageGameResult = `
<div id="game-result-page"  class="display-flex flex-direction-column justify-content-center align-items-center open-opacity">
    <div id="result-emojis">
        <div id="emoji-result" class="element-emoji"></div>
    </div>
        
    <p id="txt-result">VENCEDOR!</p>
`
