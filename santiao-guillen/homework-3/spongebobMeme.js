function spongeMeme(sentence) {

    let result = sentence.split("").map((values , i) => {
        return (i % 2 == 0) ? values.toUpperCase() : values.toLowerCase();
    })
    return result.join("");
}

spongeMeme("stop Making spongebob Memes!");