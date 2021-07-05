const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    let lettersV = letters[0].map((item, colIndex) => letters.map(row => row[colIndex]));
    const verticalJoin = lettersV.map(ls => ls.join(''))

    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    
    for (l of verticalJoin) {
        if (l.includes(word)) return true
    }

    return false;

}

module.exports = wordSearch