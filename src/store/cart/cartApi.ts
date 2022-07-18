export const fetchCartData = () => {
  return fetch("https://fashionstudio-2c756-default-rtdb.firebaseio.com/cart.json").then(data=> data.json())
}