abstract class Sizes {
  constructor(public sizes: string[]) {
    this.sizes = sizes;
  }

  getAvailableSize() {
    return this.sizes;
  }

  setAvailableSize(sizes: string[]) {
    this.sizes = sizes;
  }
}

class Pizza extends Sizes {
  public toppings: string[] = [];
  constructor(readonly name: string, public sizes: string[]) {
    super(sizes);
  }

  public addToppings(topping: string) {
    this.toppings.push(topping);
  }
}

const pizza = new Pizza("BBQ", ["small, large"]);
pizza.addToppings("chicken");

console.log(pizza);
