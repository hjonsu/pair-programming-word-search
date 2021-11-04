const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
    // console.log(horizontalJoin);
    for (const l of horizontalJoin) {
        if (l.includes(word)) return true;
        if (l.includes(word.split("").reverse().join(""))) return true;
    }
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    for (const v of verticalJoin) {
        if (v.includes(word)) return true;
        if (v.includes(word.split("").reverse().join(""))) return true;
    }

    if (checkDiagonal(letters, word)) {
        return true;
    }

    return false;
};


const checkDiagonal = function (array, word) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i][j] === word[0]) {
                let lettersChecked = 0;
                while (array[i + lettersChecked][j + lettersChecked] === word[lettersChecked] && lettersChecked < word.length) {
                    if (array[i + (lettersChecked + 1)] && word[lettersChecked + 1]) {
                        if (array[i + (lettersChecked + 1)][j + (lettersChecked + 1)])
                            lettersChecked++;
                        else
                            break;
                    } else
                        break;
                }
                if (lettersChecked === word.length - 1) {
                    return true;
                }

                lettersChecked = 0;
                while (array[i - lettersChecked][j + lettersChecked] === word[lettersChecked] && lettersChecked < word.length) {
                    if (array[i - (lettersChecked + 1)] && word[lettersChecked + 1]) {
                        if (array[i - (lettersChecked + 1)][j + (lettersChecked + 1)])
                            lettersChecked++;
                        else
                            break;
                    } else
                        break;
                }
                if (lettersChecked === word.length - 1) {
                    return true;
                }

                lettersChecked = 0;
                while (array[i - lettersChecked][j - lettersChecked] === word[lettersChecked] && lettersChecked < word.length) {
                    if (array[i - (lettersChecked + 1)] && word[lettersChecked + 1]) {
                        if (array[i - (lettersChecked + 1)][j - (lettersChecked + 1)])
                            lettersChecked++;
                        else
                            break;
                    } else
                        break;
                }
                if (lettersChecked === word.length - 1) {
                    return true;
                }

                lettersChecked = 0;
                while (array[i + lettersChecked][j - lettersChecked] === word[lettersChecked] && lettersChecked < word.length) {
                    if (array[i + (lettersChecked + 1)] && word[lettersChecked + 1]) {
                        if (array[i + (lettersChecked + 1)][j - (lettersChecked + 1)])
                            lettersChecked++;
                        else
                            break;
                    } else
                        break;
                }
                if (lettersChecked === word.length - 1) {
                    return true;
                }
            }
        }
    }
    return false;
};



const transpose = function (inputArr) {
    const outputArr = [];
    for (let i = 0; i < inputArr[0].length; i++) {
        outputArr.push([]);
        for (let j = 0; j < inputArr.length; j++) {
            outputArr[i].push(inputArr[j][i]);
        }
    }
    return outputArr;
}


module.exports = wordSearch;