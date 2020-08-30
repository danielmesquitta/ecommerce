import produce from 'immer';

import { Cart, ApiResponse } from '~/@types';
import { Payload } from './actions';

const INITIAL_STATE: Cart = { products: [], formattedTotal: '', total: 0 };

interface Action {
  type: string;
  payload: Payload;
}

const cart = produce((draft: Cart, action: Action) => {
  switch (action.type) {
    case '@cart/ADD':
      const payload = action.payload as ApiResponse;
      const index = draft.products.findIndex(
        product => product.id === payload.id
      );

      // If product is already in the cart
      if (index >= 0) {
        const newProduct = draft.products[index];
        newProduct.amount += 1;
        newProduct.subtotal = payload.price * newProduct.amount;
        newProduct.formattedSubtotal = `R$ ${newProduct.subtotal}`;
      } else {
        draft.products.push({
          ...payload,
          amount: 1,
          subtotal: payload.price,
          formattedPrice: `R$ ${payload.price}`,
          formattedSubtotal: `R$ ${payload.price}`,
        });

        draft.total = draft.products
          .map(product => product.subtotal)
          .reduce(
            (accumulator, currentSubtotal) => accumulator + currentSubtotal
          );
      }

      const total = draft.products
        .map(product => product.subtotal)
        .reduce(
          (accumulator, currentSubtotal) => accumulator + currentSubtotal
        );
      draft.total = total;
      draft.formattedTotal = `R$ ${total}`;
      break;

    case '@cart/REMOVE':
      break;

    case '@cart/UPDATE_AMOUNT':
      break;
  }
}, INITIAL_STATE);

export default cart;
