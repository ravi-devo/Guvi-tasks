//Return all the palindromes in an array

let userInput = [
    'racecar',
    'geek',
    'madam',
    'bagab',
    'come'
];

let palindromes = function (userInput){
    let arr = userInput;
    let answerArray = [];
    for(let i = 0; i < arr.length; i++){
        temp = arr[i].split("").reverse().join("");
        if(temp == arr[i]){
            answerArray.push(arr[i]);
        }
    }
    return answerArray;
}

console.log(palindromes(userInput).join(" "));