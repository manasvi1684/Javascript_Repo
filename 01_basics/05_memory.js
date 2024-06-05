// STACK AND HEAP MEMORY
// STACK-For Primitive datatypes
// HEAP- For Non-Primitive datatypes
let myYoutubeName='manasvicom'
let anothername=myYoutubeName
anothername="chaiaurcode"
console.log(myYoutubeName)
console.log(anothername)

let userOne={
    email:"user@google.com",
    upi: "user@ybl"
}
let userTwo=userOne

userTwo.email="manu@google.com"
console.log(userOne.email)
console.log(userTwo.email)