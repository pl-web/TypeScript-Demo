// 类
const _foo = function () {
  console.log(this)
}
// _foo() // window
class Point {
  foo() {
    _foo.call(this)
    console.log(this)
  }
}
const p = new Point()
// console.log(p)
p.foo()