// // ARRAYs
// const arr=[0,1,2,3,4,5]
// // console.log(arr[3])

// // ARRAY METHODS
// arr.push(6)
// arr.push(7)
// arr.pop()
// console.log(arr);

// arr.unshift(9)
// arr.shift()
// console.log(arr)

// const newArr=arr.join()
// console.log(arr)
// console.log(newArr)   //THis function converted the array into a string.

// // SLICE AND SPLICE
// console.log("A ",arr)
// const myn1=arr.slice(1,3)
// console.log(myn1)  //SLICE makes changes ina copy of the array.
// console.log("B ",arr)
// const myn2=arr.splice(1,3)
// console.log("C ",arr)  //SPLICE manipulate and makes changes in the original array
// console.log(myn2)

// const marvel_heroes=["thor","IronMan","Spiderman"]
// const dc_heros=["superman","flash","batman"]
// // marvel_heroes.push(dc_heros)
// // console.log(marvel_heroes);
// // console.log(marvel_heroes[3][1]);
// const all_heroes=marvel_heroes.concat(dc_heros)
// console.log(all_heroes)
// const all_new_heros=[...marvel_heroes,...dc_heros]
// // console.log(all_new_heros)
// const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array=another_array.flat(Infinity)
// console.log(real_another_array)

console.log(Array.isArray("Manasvi"))
console.log(Array.from("Manasvi"))
console.log(Array.from({name:"manasvi"})) //INTERESTING CASE
let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))
