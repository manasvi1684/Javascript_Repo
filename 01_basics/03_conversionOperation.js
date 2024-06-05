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