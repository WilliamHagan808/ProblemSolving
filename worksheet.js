"use strict"
// console.log("Code")

function reverseString(str) {

    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

const string = prompt('Enter a string: ');

const result = reverseString(string);
console.log(result);


const str = 'i am problem solving';
const arr = str.split(" ");

for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}

const str2 = arr.join(" ");
console.log(str2);


const str = 'aaaabbbcc';

const compressString = (str = '') => {
    let res = '';
    let count = 1;
    for(let i = 0; i < str.length; i++){
       let cur = str[i];
       let next = str[i + 1];
       if(cur === next){
          count++;
       }else{
          res += cur + String(count);
          count = 1;
       };
    }
    return res.length < str.length ? res : str;
}
console.log(compressString(str));