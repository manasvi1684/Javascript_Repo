const coding=["js","ruby","java","python","cpp"]
const values=coding.forEach((item)=>{
    // console.log(item);
    return item;
})
console.log(values)

 const mynum=[1,2,3,4,5,6,7,8,9,10]
//  const newnums=mynum.filter((num)=> {
//     return num>4})
// console.log(newnums)
 const newnums=[]
 mynum.forEach((num)=>{
    if(num>4){
        newnums.push(num)
    }
 })
 console.log(newnums)