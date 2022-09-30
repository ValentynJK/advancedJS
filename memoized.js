function addTo80(n) {
  let count = 0
  console.log('...')
  for (let i = 0; i < 1000000000; i++) {
    count++
  }
  console.log('at last')
  return n + 80
}

function memoizedAddTo80() {
  const cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n]
    } else {
      cache[n] = addTo80(n);
      return cache[n]
    }
  }
}

const memoAddTo80 = memoizedAddTo80()

console.log(memoAddTo80(5));
console.log(memoAddTo80(5));
console.log(memoAddTo80(5));
