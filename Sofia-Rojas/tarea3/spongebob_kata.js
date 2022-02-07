function spongeMeme(sentence) {
  let meme = "";
  let i = 0;
while (i < sentence.length) {
    if(i%2===0){
        meme+=sentence[i].toUpperCase();
    }else{
        meme+=sentence[i].toLowerCase();
    } 
 i++;
}
return meme;

}