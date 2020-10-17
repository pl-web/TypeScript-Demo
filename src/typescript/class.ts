// TypeScript 类
// class Point{
//   public x: number
//   public y: number
//   constructor(x: number, y: number) {
//     this.x = x
//     this.y = y
//   }
//   public getPoint() {
//     console.log('this time x: ', this.x);
//     console.log('this time y: ', this.y);
//   }
// }
// const point = new Point(1, 2);
// console.log('point: ', point);

// public private protected 修饰符
class Point {
  public x: number;
  public y: number;
  private z: number;
  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}
const point = new Point(1,2,3);
console.log('point: ', point);
console.log(point.x);
// console.log(point.z); // Property 'z' is private and only accessible within class 'Point'.
// console.log(Point.z);
console.log(typeof Point);