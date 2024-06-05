function loginUserMessage(username = "sam"){
    if(!username){
            console.log("Pleasse enter a username");
            return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("manasvi"))
console.log(loginUserMessage())


function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(300,200,400))
const user={
    username:"manasvi",
    price:100
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user)