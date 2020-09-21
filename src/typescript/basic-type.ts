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
// any 类型
let any_: any
any_ = 'str-01' // any_ = 123
let arr_any: any[]
arr_any = ['1', 2]
// void 类型
// 当函数没有返回值时，我们可以去指明该函数的返回值为void
const foo = (params: string): void => {
  console.log("params: ", params)
}
foo('it is a string')
// object 对象
let obj: object
obj = {
  name: 'LL',
  age: 23
}
console.log(obj)
// 类型断言 -- 可以去进行类型的转换
const getLength = (target: number | string): number => {
  if((<string>target).length || (<string>target).length === 0) {
    return (target as string).length
  } else {
    return target.toString().length
  }
}