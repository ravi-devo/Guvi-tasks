//Remove duplicates from an array

let userInput = [
    1, 2, 3, 3, 1, 5, 4, 1
];

(function (userInput){
    let arr = userInput;
    arr = [... new Set(arr)];
    console.log(arr);
})(userInput);