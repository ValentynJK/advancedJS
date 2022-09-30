//Exercise - extend the functionality of a built in object

//#1
//Date object => to have new method .lastYear() which shows you last year 'YYYY' format.

// #1 SOLUTION
/*
Object.defineProperty(Date.prototype, 'lastYear', {
  value: function () { return (this.getFullYear() - 1) }
})
*/

// #2 SOLUTION
Date.prototype.lastYear = function () {
  return this.getFullYear() - 1
}
console.log(new Date('1900-10-10').lastYear()) // '1899'


// #Bonus
// Mofify .map() to print '🗺' at the end of each item.
// #1 SOLUTION
/*
Object.defineProperty(Array.prototype, 'map', {
  value: function () { return this.reduce((acc, el) => [...acc, el + '🗺 '], []).toString('') }
})
*/

// #2 SOLUTION

Array.prototype.map = function () {
  let resultArray = []
  for (let i of this) {
    resultArray.push(i + ' 🗺')
  }
  return resultArray
}

console.log([1, 2, 3].map()); // 1🗺, 2🗺, 3🗺
