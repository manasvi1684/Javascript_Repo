const mynums=[1,2,3]
// const mytotal=mynums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval:${currval}`)
//     return acc+currval
// },0)
const mytotal=mynums.reduce((acc,curr)=>acc+curr,0)

console.log(mytotal)

const shoppingCart=[
    {
        itemname:"js course",
        price:2999
    },
    {
        itemname:"python course",
        price:999
    },
    {
        itemname:"mobile dev course",
        price:5999
    },
    {
        itemname:"data science course",
        price:8999
    },
]
const pricetopay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(pricetopay)