const createArray = (value: any, times: number = 5) => {
  return new Array(times).fill(value)
}

console.log(createArray(2))
