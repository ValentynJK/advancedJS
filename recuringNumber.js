// find first recurring number
//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input) {
  if (!Array.isArray(input)) return 'function requires an array '
  const numbersPassed = [];
  for (let i = 0; i < input.length; i++) {
    if (numbersPassed.some(el => el === input[i])) return input[i]
    numbersPassed.push(input[i]);
  }
  return undefined
}


function firstRecurringCharacter2(input) {
  if (!Array.isArray(input)) return 'function requires an array '
  const hashTable = {};
  for (el of input) {
    if (hashTable[el]) return el;
    hashTable[el] = el
  }
  return undefined
}


console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4])) // 2
console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4])) // 1
console.log(firstRecurringCharacter([2, 3, 4, 5])) // undefined
console.log(firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4])) // 5


console.log(firstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4])) // 2
console.log(firstRecurringCharacter2([2, 1, 1, 2, 3, 5, 1, 2, 4])) // 1
console.log(firstRecurringCharacter2([2, 3, 4, 5])) // undefined
console.log(firstRecurringCharacter2([2, 5, 5, 2, 3, 5, 1, 2, 4])) // 5

//Bonus... What if we had this:
// 
// return 5 because the pairs are before 2,2