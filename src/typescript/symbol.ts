// symbol类型
// 基本数据类型
// Symbol 函数生成此类型的变量
const sy = Symbol()
console.log("symbol data type: ", sy)
const sy_2 = Symbol()
console.log("symbol data type: ", sy_2)
// console.log(sy === sy_2)
// This condition will always return 'false' since the types 'typeof sy' and 'typeof sy_2' have no overlap.
const sy_season = Symbol('season')
const sy_onean = Symbol('onean')
// console.log(sy_season === sy_onean) // false
// -----------------
// Symbol
let prop_1 = 'name'
let prop_2 = 'age'
const my_info = {
  [prop_1]: 'LL',
  [prop_2]: 21
}
console.log(my_info)
// -----------------
const prop_sy_1 = 'name'
const prop_sy_2 = 'age'
const prop_sy_3 = Symbol('job')
const my_info_sy = {
  [prop_sy_1]: 'PP',
  [prop_sy_2]: 20,
  [prop_sy_3]: 'IT'
}
console.log(my_info_sy)
// 遍历属性名
for(let key in my_info_sy) {
  console.log("my_info_sy", key) // 获取不到Symbol的属性名
}
// Object.getOwnPropertySymbols()
// Reflect.ownKeys()
console.log(Object.getOwnPropertySymbols(my_info_sy))

// Symbol
let arr_1: Array<any> = [1, 2]
// console.log([].concat(arr_1, [1,2]))
