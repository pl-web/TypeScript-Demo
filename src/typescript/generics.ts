const createArray = <T>(value: T, times: number = 5): T[] => { 
  return new Array(times).fill(value)
}

console.log(createArray<number>(2))
console.log()

const createObject = () => {

}

const createTuble = <T, U>(params1: T, params2: U, times: number): Array<[T, U]> => {
  return new Array(times).fill([params1, params2])
}
const t = createTuble(1, 'abc', 3)
console.log(t)