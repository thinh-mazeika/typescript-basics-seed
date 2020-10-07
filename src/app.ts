interface SizesInterface {
  AvailableSizes: string[];
}

abstract class Sizes implements SizesInterface {
  constructor(protected sizes: string[]) {
    this.sizes = sizes;
  }

  get AvailableSizes() {
    return this.sizes;
  }

  set AvailableSizes(sizes: string[]) {
    this.sizes = sizes;
  }
}

interface PizzaInterface extends SizesInterface {
  readonly name: string;
  addToppings(topping: string): void;
  updateSizes(sizes: string[]): void;
  toppings: string[];
}

class Pizza extends Sizes {
  public toppings: string[] = [];
  constructor(readonly name: string, sizes: string[]) {
    super(sizes);
  }

  public addToppings(topping: string) {
    this.toppings.push(topping);
  }

  public updateSizes(sizes: string[]) {
    this.sizes = sizes;
  }
}

const pizza = new Pizza("BBQ", ["small, large"]);
pizza.addToppings("chicken");
console.log(pizza.AvailableSizes);
pizza.updateSizes(["xxlarge"]);
console.log(pizza.AvailableSizes);
