const puzzleNumbers = document.querySelectorAll('.numbers');
const puzzleContainer = document.querySelector('#container-puzzle');

const puzzleState = [
    [puzzleNumbers[0], puzzleNumbers[1], puzzleNumbers[2], puzzleNumbers[3]],
    [puzzleNumbers[4], puzzleNumbers[5], puzzleNumbers[6], puzzleNumbers[7]],
    [puzzleNumbers[8], puzzleNumbers[9], puzzleNumbers[10], puzzleNumbers[11]],
    [puzzleNumbers[12], puzzleNumbers[13], puzzleNumbers[14], puzzleNumbers[15]],
];

function movArea(area1, area2) {
    const tempTop = area1.style.top;
    const tempLeft = area1.style.left;

    area1.style.top = area2.style.top;
    area1.style.left = area2.style.left;

    area2.style.top = tempTop;
    area2.style.left = tempLeft;
}

function render(puzzleContainer, puzzleState) {
    puzzleState.forEach((row, rowPosition) => {
        row.forEach((column, columnPosition) => {
            column.style.top = `${rowPosition * 100}px`;
            column.style.left = `${columnPosition * 100}px`;
            puzzleContainer.appendChild(column);
        });
    });
}

puzzleContainer.addEventListener('click', (event) => {
    const target = event.target;

    let x, y;

    puzzleState.forEach((row, rowPosition) => {
        row.forEach((column, columnPosition) => {
            if(column === target) {
                x = rowPosition;
                y = columnPosition
            }
        });
    });

    let emptyX, emptyY;

    puzzleState.forEach((row, rowPosition) => {
        row.forEach((column, columnPosition) => {
            if(column.innerText === '') {
                emptyX = rowPosition;
                emptyY = columnPosition;
            }
        });
    });

    if(
        (y === emptyY && (x + 1 === emptyX || x - 1 === emptyX)) ||
        (x === emptyX && (y + 1 === emptyY || y - 1 === emptyY))
    ) {

        movArea(puzzleState[x][y], puzzleState[emptyX][emptyY]);

        const movTemp = puzzleState[x][y];
        puzzleState[x][y] = puzzleState[emptyX][emptyY];
        puzzleState[emptyX][emptyY] = movTemp;
    }
});

render(puzzleContainer, puzzleState);