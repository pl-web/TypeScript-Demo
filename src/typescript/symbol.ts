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
const my_info_sy = {
  [prop_sy_1]: 'PP',
  [prop_sy_2]: 20
}
console.log(my_info_sy)
// 遍历属性名
for(let key in my_info) {
  console.log("my_info")
}