function isFlush(cards) {
        return cards.every((a)=>
        cards[0].slice(-1)===a.slice(-1));
}

console.log(isFlush([  "AH", "1S",  "9S", "KS", "4S" ]));
console.log(isFlush([  "AD", "1D",  "9D", "KD", "4D"  ]));
console.log(isFlush([  "AC", "1A",  "9C", "KC", "4D" ]));

