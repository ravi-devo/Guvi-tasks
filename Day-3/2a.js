// Print odd numbers of an array

let userInput = [1, 2, 3, 4, 5, 6];
let answerArray = [];

const myFunc = (userInput) => {
    let arr = userInput;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 1){
            answerArray.push(arr[i]);
        }
    }
    console.log(answerArray.join(" "));
}

myFunc(userInput);