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