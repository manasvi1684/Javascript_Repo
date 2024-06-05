// SINGLETON
// OBJECT LITERALS
const mySym=Symbol("key1")
const JsUser={
    "fullname":"Manasvi Gupta",
    [mySym]:"mykey1", //This is the syntax of writing a symbol in objects.
    name: "Manasvi",
    age: 18,
    location: "Jaipur",
    email: "manasvi@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturdays"]
}
console.log(JsUser.email)
console.log(JsUser["email"]) //It is important to know this method to access objects because when u give a "keyvalue" as a string theres no other way to acess the element other than this.
console.log(JsUser["fullname"]) //Here you can see that "fullname" being of string type we can only access it using this method
console.log(JsUser[mySym]) //Here you can see that we can only access symbol it using this method

JsUser.email="Manasvi@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email="manasvi@micro.com"
// console.log(JsUser)

JsUser.greeting=function(){
    console.log("Hello JS user")
}
JsUser.greetingTwo=function(){
    console.log(`Hello JS user ${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())

const tinderUser=new Object()
const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="Sam"
tinderUser.isLoggedIn=false
// console.log(tinderUser);
const regularUser={
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"manasvi",
            lastname:"choudary"
        }
    }
}
// console.log(regularUser.fullname?.userfullname.firstname)
const obj1={1: "a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}

// const obj3={ obj1,obj2}
// const obj3=Object.assign( {},obj1,obj2,obj4)
const obj3={...obj1,...obj2,...obj4} //Spreading 
console.log(obj3);

const users=[
    {
        id:1,
        email: "m@gmail.com"
    },
    {
        id:2,
        email: "m@gmail.com"
    },
    {
        id:3,
        email: "m@gmail.com"
    },
    {
        id:4,
        email: "m@gmail.com"
    },
]

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course={
    coursename:"js",
    price:"999",
    courseInstructor:"manasvi"
}
// course.courseInstructor
const {courseInstructor:instructor}=course
console.log(instructor)

{
    "name"
}