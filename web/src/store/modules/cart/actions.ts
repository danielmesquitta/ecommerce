import { Product } from '../../../pages/Home';

export default {
  addToCart(product: Product) {
    return { type: '@cart/ADD', product };
  },

  removeFromCart(id: number) {
    return { type: '@cart/REMOVE', id };
  },

  updateAmount(id: number, amount: number) {
    return { type: '@cart/UPDATE_AMOUNT', id, amount };
  },
};
