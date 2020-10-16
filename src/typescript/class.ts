// TypeScript 类
class Point{
  public x: number
  public y: number
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
  public getPoint() {
    console.log('this time x: ', this.x);
    console.log('this time y: ', this.y);
  }
}
const point = new Point(1, 2);
console.log('point: ', point);