// Boolean
let bool: boolean = true
console.log("boolean type:", bool)
// number
let num: number
num = 0
console.log("number type: ", num)
// String
let str: string
str = 'abcdefg'
console.log("string type: ", str)
// Array
let arr: number[]
arr = [1,2,3]
console.log("number array arr: ", arr)
let arr_ : Array<number>
arr_ = [1,2,3,4,5]
console.log("number array arr_: ", arr_)
let _arr: (string | number)[]
_arr = [1,2,3,'a','b']
console.log("string number array _arr: ", _arr)
// Tuble
let tuble: [string, number, boolean]
tuble = ['1', 2, true]
// 枚举
enum animal {
  Dog,
  Cat,
  Mouse
}
console.log(animal.Dog) // 0
console.log(animal.Cat) // 1
console.log(animal.Mouse) // 2
console.log(animal[0]) // Dog
console.log(animal[1]) // Cat
console.log(animal[2]) // Mouse