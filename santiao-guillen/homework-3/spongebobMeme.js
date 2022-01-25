function spongeMeme(sentence) {
    let array = [];
    let result;

    for (const value in sentence) {
        if (value % 2 == 0) result = sentence[value].toUpperCase();
        else result = sentence[value].toLowerCase();

        array.push(result);
    }
    return array.join("");
}

spongeMeme("stop Making spongebob Memes!");