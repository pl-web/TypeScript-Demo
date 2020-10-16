// 类
// function Food() {
//   this.name = 'fish'
// }
// Food.prototype.getFoodName = function() {
//   return this.name
// }
// function Time() {
//   this.time = 'time'
// }
// Time.prototype = new Food()
// const t = new Time()
// console.log(t)

// // ------------------------------------------
// console.log("-------------------------------")
// class P {
//   constructor(surname) {
//     this.surname = surname
//   }
//   getSurname() {
//     return this.surname
//   }
// }
// class C extends P {
//   constructor(surname, name, address ,age) {
//     super(surname)
//     this.name = name
//     this.address = address
//     this.age = age
//   }
// }
// const c = new C('i', 'ining', 'solar system', 1)
// console.log(c)
// console.log(c.getSurname())
// console.log(Object.getPrototypeOf(C) === P) // true

// ---------------------------------------------------------
// console.log('--------------------------------')
// super keyword
// ① super as function
// ② super as object
// class SuperOne {
//   constructor() {
//     this.class_name = 'SuperOne'
//   }
//   getClassName() {
//     console.log(this.class_name)
//   }
// }
// class SuperSecond extends SuperOne {
//   constructor(surname, name) {
//     super(surname)
//     this.name = name
//   }
// }

// class
class P {
  constructor() {
    this.p_name = 'p_name';
  }
  p_print_name() {
    console.log(this.p_name);
  }
}
class C extends P {
  constructor() {
    super();
    this.c_name = 'c_name';
  }
  c_print_name() {
    console.log(this.c_name);
    console.log('--------------------');
    super.p_print_name();
  }
}
const c = new C();
c.c_print_name();
c.p_print_name();