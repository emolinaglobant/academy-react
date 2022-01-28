function spongeMeme(text) {
       let sentence = text.split('');
       let retardifier = '';
        for (let i = 0; i < sentence.length; i++) {
            if (i % 2 !== 0) {
                retardifier += sentence[i].toLowerCase()
            } else {
                retardifier += sentence[i].toUpperCase();
            }
        } 
        return retardifier
}
spongeMeme("stop Making spongebob Memes!")

