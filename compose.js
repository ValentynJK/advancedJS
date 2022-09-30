// Amazon shopping
const userInitState = {
  name: 'Kim',
  active: true,
  money: 1000,
  cart: [{ name: 'glasses', price: 200 }],
  purchases: [],
  history: []
}

const compose = (f, g) => (...data) => f(g(...data))
const purchase = (...functions) => functions.reduce(compose)

console.log(purchase(
  emptyCart,
  buyItems,
  addTaxes,
  addItemToCart,
)(userInitState, { name: 'jeans', price: 132 }))

function addItemToCart(state, item) {
  const updatedState = Object.assign({}, state, { cart: [...state.cart, item] });
  return updatedState
}

function addTaxes(state) {
  const newCart = state.cart.map(item => {
    return {
      name: item.name,
      price: item.price * 1.03
    }
  })
  const updatedState = Object.assign({}, state, { cart: newCart });
  return updatedState
}

function buyItems(state) {
  const purchaseCost = state.cart.reduce((sum, curr) => curr.price + sum, 0)
  const updatedState = Object.assign({}, state, { purchases: state.cart, money: state.money - purchaseCost });
  return updatedState
}

function emptyCart(state) {
  const updatedState = Object.assign({}, state, { cart: [] });
  return updatedState
}


//Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

//Bonus:
// accept refunds.
// Track user history.