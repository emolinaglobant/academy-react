let [string, stringHTML, result, resultDOM] = [
  "",
  "",
  undefined,
  document.getElementById("result"),
];

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

function erase() {
  [string, stringHTML] = [string.slice(0, -1), stringHTML.slice(0, -1)];
  resultDOM.innerHTML = stringHTML;
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

function main(text) {
    if ((string.length == 0) & isNaN(text)) {
      [string, stringHTML] = isContinuous(result);
    }
    [string, stringHTML] = addText(string, stringHTML, text);
    if (text == "=") {
      result = calculate(string);
      resultDOM.innerHTML = formatNumber(result);
      [string, stringHTML] = ["", ""];
    } else {
      resultDOM.innerHTML = stringHTML;
    }
  
  }

function reset() {
  [string, stringHTML] = ["", ""];
  resultDOM.innerHTML = "0";
  result = 0;
}
