//Return median of two sorted arrays of the same size.

let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 8, 10];

let median = function (a, b){
    let medianArray = a.concat(b);
    medianArray.sort(compareAscend);
    let val1 = medianArray[medianArray.length / 2];
    let val2 = medianArray[(medianArray.length / 2) - 1];
    let answer = (val1 + val2) / 2;
    return answer;
}

console.log(median(arr1, arr2));

function compareAscend(a, b){
    return a - b;
}

