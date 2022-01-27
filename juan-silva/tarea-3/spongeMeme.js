function spongeMeme(sentence) {

    let word = sentence.split('');
    let meme = '';
    for(let i = 0; i < word.length; i++){

        if(i % 2 !== 0){ meme += word[i].toLowerCase();}
        else {meme += word[i].toUpperCase();
        }
    }
    return meme;
}

console.log(spongeMeme("Academy-React Rocks!"))