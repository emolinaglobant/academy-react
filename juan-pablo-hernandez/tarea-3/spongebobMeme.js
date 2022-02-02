let test = 'stop Making spongebob Memes!';

function spongeMeme(sentence) {

    sentence = sentence.split('');

    for(let i = 0; i < sentence.length; i ++) {

        if(i % 2 === 0) {
            sentence[i] = sentence[i].toUpperCase();
        } else {
            sentence[i] = sentence[i].toLowerCase();
        }

    }

    sentence = sentence.join('');
    
    return sentence;
}

spongeMeme(test);