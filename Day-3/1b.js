//Convert all the strings to title caps in a string array

let userInput = [
    'guvi',
    'for',
    'geek',
    'array'
];
let temp = [], answerArray = [], str = "";

(function (userInput){
    let arr = userInput;
    for(let i = 0; i < arr.length; i++){
        temp = arr[i].split("");
        for(let j = 0; j < temp.length; j++){
            if(j == 0){
                str = temp[j].toUpperCase();
                //str += temp[j];
            }else{
                str +=temp[j];
            }
        }
        answerArray.push(str);
        str = "";
    }
    console.log(answerArray.join(" "));
})(userInput);