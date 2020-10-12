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


// -------------------------------------------------------
class PrivateAttr {
  // #_attr = 123 // future
}

// -------------------------------------------------------
function Fuu () {
  console.log(new.target)
}
const fuu = new Fuu()
