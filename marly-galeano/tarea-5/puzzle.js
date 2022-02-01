function neighborhoodCheck(tile) {
  var tilePosition = getPosition(tile);
  var emptySpace = getEmptySpaceById();
  var emptySpacePosition = getPosition(emptySpace);

  if (
    tilePosition[0] == emptySpacePosition[0] ||
    tilePosition[1] == emptySpacePosition[1]
  ) {
    //same column or row

    if (
      emptySpacePosition[0] == tilePosition[0] + 1 ||
      tilePosition[0] == emptySpacePosition[0] + 1 ||
      emptySpacePosition[1] == tilePosition[1] + 1 ||
      tilePosition[1] == emptySpacePosition[1] + 1
    ) {
      // consecutive rows or columns
      slide(tile, emptySpace);
    }
  }
}

function getPosition(element) {
  var position = element.getAttribute("data-position");
  position = [...position];
  return [parseInt(position[0]), parseInt(position[1])];
}

const getEmptySpaceById = () => document.getElementById("emptySpace");

function slide(tile, emptySpace) {
  exchangeValue(tile, emptySpace);
  exchangeClass(tile, emptySpace);
  exchangeId(tile, emptySpace);
}

function exchangeValue(elementOne, elementTwo) {
  var value1 = getElementValue(elementOne);
  var value2 = getElementValue(elementTwo);
  elementOne.value = value2;
  elementTwo.value = value1;
}
const getElementValue = (element) => element.value;

function exchangeClass(elementOne, elementTwo) {
  var class1 = getElementClass(elementOne);
  var class2 = getElementClass(elementTwo);
  elementOne.className = class2;
  elementTwo.className = class1;
}
const getElementClass = (element) => element.classList[0];

function exchangeId(tile, emptySpace) {
  tile.id = emptySpace.id;
  emptySpace.removeAttribute("id");
}
