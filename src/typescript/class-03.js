// 类
function Food() {
  this.name = 'fish'
}
Food.prototype.getFoodName = function() {
  return this.name
}
function Time() {
  this.time = 'time'
}
Time.prototype = new Food()
const t = new Time()
console.log(t)

// ------------------------------------------
console.log("-------------------------------")
class P {
  constructor(surname) {
    this.surname = surname
  }
  getSurname() {
    return this.surname
  }
}
class C extends P {
  constructor(surname, name, address ,age) {
    super(surname)
    this.name = name
    this.address = address
    this.age = age
  }
}
const c = new C('i', 'ining', 'solar system', 1)
console.log(c)
console.log(c.getSurname())