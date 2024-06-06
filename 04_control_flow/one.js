// IF
// switch(key){
//     case value:
//         break

//     default:
//         break;
// }


const userEmail="m@gmail.com"


// falsy value
// false,0,-0,Bigint On,"",null,undefined,NaN

// truthy values
// "0",'false'," ",[],{},function(){}

if(userEmail.length===0){
    console.log("array is empty")
}


// Nullish Coalescing Operator (??):null undefined
let val1;
// val1=null?? 10
// val1=null?? 10
val1=undefined?? 10
console.log(val1)
