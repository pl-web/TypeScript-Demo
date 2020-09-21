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
