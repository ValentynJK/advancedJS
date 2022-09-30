// 1 takes number and multiply on 2
// add 8 to result
// divide result on 2
// result - initial number

const compose = (f, g) => (...data) => f(g(...data))
const focus = (...fns) => fns.reduce(compose)

const i = 5;

console.log(reduceInitial(i, focus(
  divideOnTwo,
  addEight,
  multiplyOnTwo,
)(i)))

function multiplyOnTwo(n) {
  console.log('first')
  return n * 2
}

function addEight(n) {
  console.log('second')
  return n + 8
}

function divideOnTwo(n) {
  console.log('third')
  return n / 2
}

function reduceInitial(init, n) {
  return n - init
}