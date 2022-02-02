const initializeNames = name => name.replace(/ (\w)\w*(?= )/g, ' $1.');

console.log(initializeNames('Alice Betty Catherine Davis'));