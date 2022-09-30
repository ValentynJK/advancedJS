// Amazon shopping
const userInitState = {
  name: 'Kim',
  active: true,
  money: 1000,
  cart: [],
  purchases: [],
  history: []
}

let user = Object.assign(userInitState)

function shop(state = userInitState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'addItem':
      return {
        ...state,
        cart: [...state.cart, { ...payload, price: payload.price * 1.03 }],
      }
    case 'buyItems':
      return {
        ...state,
        money: state.money - state.cart.reduce((acc, curr) => curr.price + acc, 0),
        cart: [],
        purchases: [...state.purchases, ...state.cart]
      }
    case 'refund':
      return {
        ...state,
        money: state.money + state.purchases.reduce((acc, curr) => curr.price + acc, 0),
        purchases: []
      }
    case 'emptyCart':
      return {
        ...state,
        cart: []
      }
    default:
      return state
  }
}

console.log(user)

user = shop(user, { type: 'addItem', payload: { name: 'jeans', price: 20 } })
console.log(user)
// user = shop(user, { type: 'addItem', payload: { name: 'glasses', price: 12 } })
// console.log(user)
// user = shop(user, { type: 'buyItems' })
// console.log(user)
// user = shop(user, { type: 'addItem', payload: { name: 'earrings', price: 100 } })
// console.log(user)
// user = shop(user, { type: 'addItem', payload: { name: 'hat', price: 19 } })
// console.log(user)
// user = shop(user, { type: 'emptyCart' })
// console.log(user)
// user = shop(user, { type: 'refund' })
// console.log(user)



//Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

//Bonus:
// accept refunds.
// Track user history.