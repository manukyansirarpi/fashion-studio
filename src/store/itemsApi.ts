export function fetchItemsData() {
  return fetch('https://fashionstudio-2c756-default-rtdb.firebaseio.com/items.json').then(res=> res.json());
}
