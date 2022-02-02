/*In this kata you will be given a list consisting of unique elements except for one thing that appears twice.

Your task is to output a list of everything inbetween both occurrences of this element in the list.*/


function duplicateSandwich(a) {
    for (let i = 0, lim = a.length - 1, j; i < lim; i++) {
        j = a.indexOf(a[i], i + 1);
        if (j !== -1)
            return a.slice(i + 1, j);
    }
}