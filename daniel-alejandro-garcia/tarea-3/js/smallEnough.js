function smallEnough(a, limit) {
    let bool;
    a.forEach(array => {
        (array <= limit) ? bool = true : bool = false;
    });
    return bool;
}