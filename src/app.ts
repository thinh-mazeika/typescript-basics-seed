const pizzasCount: number = 2;

function discountOrder(orders: number): boolean {
  return orders >= 3;
}

if (discountOrder(pizzasCount)) {
  console.log(`You are entitled to get a discount`);
} else {
  console.log(`Buy more than 3 pizzas to get a discount`);
}
