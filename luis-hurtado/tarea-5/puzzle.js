let puzzleBox = document.querySelectorAll('div');
const arrayPuzzle = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '']
let numbers = arrayPuzzle
const numberofGrid = 4

function setUp(){
    removeDroppable(puzzleBox)

    fillPuzzle(puzzleBox, numbers)

    state.content = getState(puzzleBox)
    state.dimension = getDimension(state)
    
    setBoxId(puzzleBox)

    setDroppable(puzzleBox)
    setDraggable(puzzleBox)
}

const state = {}
state.content = numbers;

const isCorrect = (solution, gameDimension) => {
    if(JSON.stringify(solution) == JSON.stringify(gameDimension)) return true
    return false
}


//getters
const getState = (items) => {
    const state = []
    items.forEach((item, i) => {
        state.push(item.innerText)
    })
    return state
}

const getEmptyBox = ()  => {
    const emptyBox = state.emptyBoxIndex+1;
    const emptyBoxRow = Math.ceil(emptyBox/numberofGrid);
    const emptyBoxCol = numberofGrid - (numberofGrid * emptyBoxRow - emptyBox);
    return [emptyBoxRow-1, emptyBoxCol-1]
}

const getDimension = (state) => {
    let j = 0;
    let arr = []
    const {content} = state;
    for(let i = 0; i < numberofGrid; i++){
        arr.push(content.slice(j, j+numberofGrid))
        j+=numberofGrid
    }
    return arr
}
//getters


//setter

const setDroppable = (items) => {
    items.forEach((item, i) => {
        if(!item.innerText){
            state.emptyBoxIndex = i;
            item.setAttribute("ondrop", "drop_handler(event)");
            item.setAttribute("ondragover", "dragover_handler(event)");
            item.setAttribute("class", "empty");
            item.setAttribute("draggable", "false");
            item.setAttribute("ondragstart", "");
            item.setAttribute("ondragend", "");
        }
        return;
    })
}
const removeDroppable = (items) => {
    items.forEach((item, i) => {
        state.emptyBoxIndex = i
        item.setAttribute("ondrop", "")
        item.setAttribute("ondragover", "")
        item.setAttribute("draggable", "false")
        item.setAttribute("ondragstart", "")
        item.setAttribute("ondragend", "")
        item.classList.remove("empty")
    })
}
const setDraggable = (items) => {
    const [row, col] = getEmptyBox();
    console.log(state)
    let left, right, top, bottom = null;
    if(state.dimension[row][col-1]) left = state.dimension[row][col-1];
    if(state.dimension[row][col+1]) right = state.dimension[row][col+1];

    if(state.dimension[row-1] !== undefined) top = state.dimension[row-1][col];
    if(state.dimension[row+1] !== undefined) bottom = state.dimension[row+1][col];

    items.forEach(item => {
        if(item.innerText == top || 
            item.innerText == bottom ||
            item.innerText == right ||
            item.innerText == left) {
                item.setAttribute("draggable", "true")
                item.setAttribute("ondragstart", "dragstart_handler(event)")
                item.setAttribute("ondragend", "dragend_handler(event)")
            }
    })
}

//setter

const setBoxId = (puzzleBox) =>{
    for(let i = 0; i < puzzleBox.length; i++){
        puzzleBox[i].setAttribute("id", `div${i}`)
    }
}

/// DRAG HANDLERS
const dragstart_handler = ev => {
    console.log("dragstart")
    ev.dataTransfer.setData("text/plain", ev.target.id)
    ev.dataTransfer.dropEffect = "move"
}

const dragover_handler = ev => {
    console.log("dragOver")
    ev.preventDefault();    
}

const drop_handler = ev => {
    console.log("drag")
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text/plain")
    ev.target.innerText = document.getElementById(data).innerText

    ev.target.classList.remove("empty")
    ev.target.setAttribute("ondrop", "")
    ev.target.setAttribute("ondragover", "")
    document.getElementById(data).innerText = ""

    state.content = getState(puzzleBox)
    state.dimension = getDimension(state)
}

function dragend_handler(ev) {
    console.log("dragEnd")
    ev.dataTransfer.clearData()

    removeDroppable(document.querySelectorAll('div'))

    setDroppable(document.querySelectorAll('div'))
    setDraggable(document.querySelectorAll('div'))
    console.log(state.content)
    console.log(numbers)
}



//shuffle
const shuffle = (arr) => {
    const copy = [...arr]

    for(let i = 0; i < copy.length; i++){
        let j = parseInt(Math.random()*copy.length)
        let temp = copy[i]
        copy[i] = copy[j]
        copy[j] = temp
    }
    return copy
}

//shuffle
const isSolvable = (arr) => {
    let numberOfInversion = 0

    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if((arr[i] && arr[j]) && arr[i] > arr[j]) numberOfInversion++
        }
    }

    return (numberOfInversion % 2 == 0)
}



const fillPuzzle = (items, numbers) => {
    let shuffled = shuffle(numbers)

    while(!isSolvable(shuffled)) {
        shuffled = shuffle(numbers)
    }

    items.forEach((item, i) => {
        item.innerText = shuffled[i]
    })
}