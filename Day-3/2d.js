//Return all the prime numbers in an array

let userInput = [
    2, 3, 4, 5, 7, 9
];
let count = 0, num;

const myFunc = (userInput) => {
    let answerArray = [];
    let arr = userInput;
    for(let i = 0; i < arr.length; i++){
        num = arr[i];
        for(let j = num; j > 1; j--){
            
            if(arr[i] % j == 0){
                count += 1;
            }
        }
        if(count < 2){
            answerArray.push(arr[i]);
        }
        count = 0;
    }
    return answerArray;
}

let answer = myFunc(userInput);
console.log(answer.join(" "));

