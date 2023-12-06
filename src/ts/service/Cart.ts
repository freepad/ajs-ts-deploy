import Buyable from '../domain/Buyable';

export default class Cart {
  #items: Buyable[] = [];

  add(item: Buyable): void {
    this.#items.push(item);
  }

  get items(): Buyable[] {
    return [...this.#items];
  }
}
