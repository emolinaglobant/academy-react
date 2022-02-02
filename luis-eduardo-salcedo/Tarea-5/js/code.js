const puzzleTiles = document.querySelectorAll('.container_tiles__button');
const cotainerTiles = document.querySelector('#container_tiles');

const gameState = [
    [puzzleTiles[0], puzzleTiles[1], puzzleTiles[2], puzzleTiles[3]],
    [puzzleTiles[4], puzzleTiles[5], puzzleTiles[6], puzzleTiles[7]],
    [puzzleTiles[8], puzzleTiles[9], puzzleTiles[10], puzzleTiles[11]],
    [puzzleTiles[12], puzzleTiles[13], puzzleTiles[14], puzzleTiles[15]],
];

function render(cotainerTiles, gameState) {
    gameState.forEach((row, rowIndex) => {
		row.forEach((column, columnIndex) => {
			column.style.top = `${rowIndex * 100}px`;
			column.style.left = `${columnIndex * 100}px`;
			column.style['background-position-y'] = `-${rowIndex * 100}px`;
			column.style['background-position-x'] = `-${columnIndex * 100}px`;
			cotainerTiles.appendChild(column);
		});
    });
}

function moveElement(element1, element2) {
	const tempTop = element1.style.top;
	const tempLeft = element1.style.left;
	element1.style.top = element2.style.top;
	element1.style.left = element2.style.left;
	element2.style.top = tempTop;
	element2.style.left = tempLeft;
}

render(cotainerTiles, gameState);

cotainerTiles.addEventListener('click', (event) => {
	const target = event.target;

	let mainAxis, crossAxis;
	gameState.forEach((row, rowIndex) => {
		row.forEach((column, columnIndex) => {
			if (column === target) {
				mainAxis = rowIndex;
				crossAxis = columnIndex;
			}
		});
	});

	let emptyMainAxis, emptyCrossAxis;

	gameState.forEach((row, rowIndex) => {
		row.forEach((column, columnIndex) => {
			if (column.innerText === '') {
				emptyMainAxis = rowIndex;
				emptyCrossAxis = columnIndex;
			}
		});
	});

	validate(mainAxis, crossAxis,emptyMainAxis, emptyCrossAxis);
});

function validate(mainAxis, crossAxis, emptyMainAxis, emptyCrossAxis){
	if (
		(crossAxis === emptyCrossAxis && (mainAxis + 1 === emptyMainAxis || mainAxis - 1 === emptyMainAxis)) ||
		(mainAxis === emptyMainAxis && (crossAxis + 1 === emptyCrossAxis || crossAxis - 1 === emptyCrossAxis))
	) {
		moveElement(gameState[mainAxis][crossAxis], gameState[emptyMainAxis][emptyCrossAxis]);
		const temp = gameState[mainAxis][crossAxis];
		gameState[mainAxis][crossAxis] = gameState[emptyMainAxis][emptyCrossAxis];
		gameState[emptyMainAxis][emptyCrossAxis] = temp;
	}
};
