const removeSpace = (str) => {
    const res = [];
    str.split('').map(val => {
        if (val === ' ')
            res.push('%20');
        else
            res.push(val);
    });
    return res.join('');
};
//console.log(removeSpace('Hey this is Peter'));
//—————————————————————————————————————————————————————————————————————————————————————————
//Remove all numbers lower than a given value
const removeNum = (list, num) => {
    const res = [];
    list.forEach(val => {
        if (val >= num)
            res.push(val);
    });
    return res;
};
//—————————————————————————————————————————————————————————————————————————————————————————
//Find the largest sum derived from a sequence of numbers 
const maxSum = (list) => {
    const relMax = [];
    list.reduce((acc, curr) => {
        relMax.push(acc + curr);
        return acc + curr;
    });
    return relMax.sort((a, b) => b - a)[0];
};
const arr = [4, 6, -3, 5, -2, 1];
//console.log(maxSum(arr));
//—————————————————————————————————————————————————————————————————————————————————————————
//Remove a string of letters from another string (sentence)
const removeChar = (sentence, chars) => {
    const sentenceArr = [];
    const charArr = [];
    for (let i = 0; i < sentence.length; i++)
        sentenceArr.push(sentence[i]);
    for (let i = 0; i < chars.length; i++)
        charArr.push(chars[i]);
    sentenceArr.forEach((letter, i) => {
        charArr.forEach(char => {
            if (letter === char)
                sentenceArr.splice(i, 1);
        });
    });
    //concatenate the array of string chars
    return sentenceArr.reduce((acc, curr) => acc + curr);
};
//console.log(removeChar('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'))
//—————————————————————————————————————————————————————————————————————————————————————————
//Given a list of numbers, each index returns the product of all of the other values except the number at the current index
const product = (arr) => {
    return arr.map((val, i) => {
        return arr.slice(0, i).concat(arr.slice(i + 1, arr.length)).reduce((acc, curr) => acc * curr);
    });
};
//console.log(product([1, 3, 9, 4]));
//—————————————————————————————————————————————————————————————————————————————————————————
//If there is a zero, make the whole col and row 0s.
const writeZero = (matrix) => {
    //Alvaro, why does this work? What is a better way to do this?
    const originalArr = JSON.parse(JSON.stringify(matrix));
    let arr = matrix;
    arr.map((row, rowI) => {
        row.map((col, colI) => {
            if (col === 0) {
                arr[rowI].forEach((num, i) => arr[rowI][i] = 0);
                arr.forEach(newRow => newRow[colI] = 0);
            }
        });
    });
    return arr;
};
const matrix = ([[1, 0, 1, 1, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1]]);
//console.log(writeZero(matrix));
//—————————————————————————————————————————————————————————————————————————————————————————
//See if two strings are rotations of one another
const stringRotate = (str1, str2) => {
    const temp = str1 + str1;
    if (str1.length !== str2.length)
        return false;
    else if (temp.includes(str2))
        return true;
    else
        return false;
};
//console.log(stringRotate('amazon', 'azonma')) //false
//console.log(stringRotate('amazon', 'azonam'))  //true
