function spongeMeme(sentence){
    let memeSentence = "";
    sentence.split('').map((letter, index) => {
        memeSentence += index % 2 === 0 ? letter.toUpperCase() : letter.toCase();
    })
    return memeSentence
}
