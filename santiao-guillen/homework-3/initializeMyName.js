function initializeNames(name) {
    let array = name.split(' ');

    array.forEach(function () {
        array[1] = (array[1]) && array[1].charAt(0) + ".";
    });
    return array.join(" ");
}

initializeNames('Jack Ryan');
initializeNames('Lois Mary Lane');
initializeNames('Dimitri');
initializeNames('Alice Betty Catherine Davis');