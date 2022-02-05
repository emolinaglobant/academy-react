// initialize my name

const initializeNames = name => name.replace(/ (\w)\w*(?= )/g, ' $1.');
initializeNames("Yefer Garcia  ")
