//Rotate an array by k times

let userInput = [
    1, 2, 3, 4, 5
];
let k = 3;
let temp = [], answerArray = [];

(function (userInput){
    let arr = userInput;
    for(let i = 0; i < k; i++){
        temp = arr.splice(1, arr.length - 1);
        answerArray = temp.concat(arr);
        arr = answerArray;
    }
    console.log(answerArray);
})(userInput);