function initializeNames(name) {
    
    let array = name.split(' ');
    for (let i = 1; i < array.length - 1; i++)
        array[i] = array[i].charAt(0) + '.';
    
    return array.join(' ');
}

initializeNames('Jack Ryan');
initializeNames('Lois Mary Lane');
initializeNames('Dimitri');
initializeNames('Alice Betty Catherine Davis');