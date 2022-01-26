function initializeNames(name){
    let array = name.split(' ');
    for(let i in array){
        if(i > 0 && i < array.length - 1){
            array[i] = array[i].slice(0, 1) + '.';
        }
    }
    return array.join(' ');
}

console.log(initializeNames('Alice Betty Catherine Davis'));