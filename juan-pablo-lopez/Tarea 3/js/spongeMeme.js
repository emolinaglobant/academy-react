function spongeMeme(sentence){
    let result = "";
    for(let i=0; i < sentence.length; i++){
        if(i % 2 == 0){
            result += sentence[i].toUpperCase();
        }else{
            result += sentence[i].toLowerCase();
        }
    }
    return result;
}
spongeMeme("stop Making spongebob Memes!");