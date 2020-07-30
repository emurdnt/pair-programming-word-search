const wordSearch = (letters, word) => {
    let found = false;
    if(letters.length === 0) return found;
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        // console.log(l);
        if (l.includes(word)) {
           found = true;
           break;
        } else {
           found = false;
        }
    }
    //maybe transpose the array
    if(!found){
        //found a better way to transpose on stackOverflow
        // https://stackoverflow.com/questions/17428587/transposing-a-2d-array-in-javascript
        //just had to add the join to every row
        const verticalJoin = letters[0].map((_, colIndex) => letters.map(row => row[colIndex]).join(''))
        for (l of verticalJoin) {
            if (l.includes(word)) {
               found = true;
               break;
            } else {
               found = false;
            }
        }
    }
    
    return found;
}

module.exports = wordSearch;