let buttonContainer = document.getElementById('tiles');
let matrizSize = 4;
let numberOfTiles = matrizSize ** 2;
let bottonSelected = numberOfTiles;
let shuffled = false;

newGame();

function newGame() {
    loadTiles();
}

function loadTiles() {
    for (let id = 1; id <= numberOfTiles; id++) {
        let newTile = document.createElement('button');
        newTile.id = `btn${id}`;
        newTile.setAttribute('index', id);
        newTile.innerHTML = id;
        newTile.classList.add('btn');
        newTile.addEventListener('click', function () {
            swap(parseInt(this.getAttribute('index')));
        });
        buttonContainer.append(newTile);
    }
    selectedTileId = 'btn' + bottonSelected;
    selectedTile = document.getElementById(selectedTileId);
    selectedTile.classList.add("selected");
}

function shuffle() {
    let minShuffles = 100;
    let totalShuffles = minShuffles + Math.floor(Math.random() * 200);
    for (let id = minShuffles; id <= totalShuffles; id++) {
        setTimeout(timer(),id * 10);
        if (id >= totalShuffles - 1) {
            shuffled = true;
        }
    }
}

function timer() {
    let x = Math.floor(Math.random() * 4);
    let direction = 0;
    switch (x){
        case 0:
            direction = bottonSelected + 1;
        break;
        case 1:
            direction = bottonSelected - 1;
        break;
        case 2:
            direction = bottonSelected + matrizSize;
        break;
        case 3:
            direction = bottonSelected - matrizSize;
    }
    swap(direction);
};

function swap(clicked) {
    if (clicked < 1 || clicked > (numberOfTiles)) {
        return;
    }
    if (clicked == bottonSelected + 1) {
        if (clicked % matrizSize != 1) {
            setSelected(clicked);
        }
    } else if (clicked == bottonSelected - 1) {
        if (clicked % matrizSize != 0) {
            setSelected(clicked);
        }
    } else if (clicked == bottonSelected + matrizSize) {
        setSelected(clicked);
    } else if (clicked == bottonSelected - matrizSize) {
        setSelected(clicked);
    }
    if (shuffled) {
        if (checkHasWon()) {
            alert("YOU WON!");
        }
    }
}

function checkHasWon() {
    for (let id = 1; id <= numberOfTiles; id++) {
        currentTile = document.getElementById(`btn${id}`);
        currentTileIndex = currentTile.getAttribute('index');
        currentTileValue = currentTile.innerHTML;
        if (parseInt(currentTileIndex) != parseInt(currentTileValue)) {
            return false;
        }
    }
    return true;
}

function setSelected(index) {
    currentTile = document.getElementById(`btn${bottonSelected}`);
    currentTileText = currentTile.innerHTML;
    currentTile.classList.remove('selected');
    newTile = document.getElementById(`btn${index}`);
    currentTile.innerHTML = newTile.innerHTML;
    newTile.innerHTML = currentTileText;
    newTile.classList.add("selected");
    bottonSelected = index;
}