// 1
let c = 10;
let d = 5;
let result = c + d;
console.log(result); 

//2
const a = 12345;
const arrayOfStrings = Array.from(String(a));
const arrayOfDigits = Array.from(String(a), Number);
let sum = 0;
for(let i = 0; i < 5; i += 1){
    sum = sum + arrayOfDigits[i];
}
console.log(sum);

//3
let num1 = Number(prompt('Введіть перше число'));
let num2 = Number(prompt('Введіть друге число'));
alert(num1 + num2);