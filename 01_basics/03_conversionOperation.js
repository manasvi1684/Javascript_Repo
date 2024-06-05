let score="33abc"
// const {score} =req.body
console.log(typeof score)
console.log(typeof (score))
let valueInNumber=Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// "33"=33
// "33 abc" => Nan (Not a number)
// true => 1; false =>0

let isloggedin="maa="

let booleanisloggedin = Boolean(isloggedin)
// console.log(booleanisloggedin);

// 1=>true;
// 0=>false
// ""=>false
// "string" =>true

let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)



// *********************************************OPERATIONS**********************************************************************************//
let value=3
let negValue= -value
console.log(negValue)

let str1="hello"
let str2=" manu"
let str3=str1+str2
console.log(str3)

console.log("1" + 2);
console.log(1+"2");
console.log("1"+2+2); //if string first all values are treated as strings 
console.log(1+2+"2"); //IF STRING last first conversion is done
console.log(1+"2"+2);
console.log(true);

let num1,num2,num3
num1=num2=num3=2+2
let gameCounter=100
gameCounter++;
++gameCounter;
console.log(gameCounter);
console.log(gameCounter);


