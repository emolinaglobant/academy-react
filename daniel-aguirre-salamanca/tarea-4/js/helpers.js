function addText(string, stringHTML, text) {
  return text == "x" || text == "/" || text == "r"
    ? [string + text, stringHTML + convertHTML(text)]
    : [string + text, stringHTML + text];
}

function convertHTML(operator) {
  if (operator == "/") {
    return "&divide;";
  } else if (operator == "x") {
    return "&times;";
  }
  return "&radic;";
}

function formatNumber(value) {
  if (Number.isInteger(value)) {
    return value;
  } else {
    value = String(value);
    const index = value.indexOf(".");
    return value.slice(index + 1).length > 4
      ? parseFloat(value).toFixed(4)
      : value;
  }
}

function isContinuous(result) {
  return typeof result !== undefined ? [result, result] : ["0", "0"];
}

function isNumber(element){
  return isNaN(element) & (element != ".") ? false: true
}
export {addText, convertHTML, formatNumber, isContinuous, isNumber}