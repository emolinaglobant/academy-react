function spongeMeme(sentence) {
    return sentence.split("").map((element, index) => {
        return (index %2 === 0) ?  element.toUpperCase() :  element.toLowerCase(); 
    }).join("");
}
