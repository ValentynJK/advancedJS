const nestedArray = [[[1, 2]], [[[[[4, 4], [5]], 6, [7]]]], [[[[[5, 6]]]]]]

const flatter = (array) => {
  return array.reduce((acc, curr) => {
    return Array.isArray(curr) ? acc.concat(flatter(curr)) : acc.concat(curr)
  }, [])
}

console.log('flat', nestedArray.flat(Infinity))
console.log('flatter', flatter(nestedArray))