//Sum of all numbers in an array

let userInput = [1, 2, 3, 4, 5];
let sum = 0;

const myFunc = (userInput) => {
    let arr = userInput;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    console.log(sum);
}

myFunc(userInput);