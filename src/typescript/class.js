// 类
function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.toIntroduction =  function() {
  console.log('我的名字是' + this.name + ", 今年" + this.age + "岁了")
}

const u1 = new User('pp', 20)

console.log("User - 01: u1 ", u1)

u1.toIntroduction()

// --------------------------------------------------------------------
class Classmate{
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  answerQuestion() {
    console.log("我是"+this.name+", 我要回答问题")
  }
}