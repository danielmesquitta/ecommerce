import produce from 'immer';

import { Cart } from '~/@types';
import {
  Payload,
  AddPayload,
  RemovePayload,
  UpdateAmountPayload,
} from './actions';

import formatPrice from '~/utils/formatPrice';

const INITIAL_STATE: Cart = { products: [], formattedTotal: '', total: 0 };

interface Action {
  type: string;
  payload: Payload;
}

const cart = produce((draft: Cart, action: Action) => {
  switch (action.type) {
    case '@cart/ADD': {
      const payload = action.payload as AddPayload;
      const index = draft.products.findIndex(
        product => product.id === payload.id
      );
      if (index >= 0) {
        const addedProduct = draft.products[index];
        addedProduct.amount += 1;
        addedProduct.subtotal = payload.price * addedProduct.amount;
        addedProduct.formattedSubtotal = formatPrice(addedProduct.subtotal);
      } else {
        draft.products.push({
          ...payload,
          amount: 1,
          subtotal: payload.price,
          formattedPrice: formatPrice(payload.price),
          formattedSubtotal: formatPrice(payload.price),
        });
      }
      const total = draft.products
        .map(product => product.subtotal)
        .reduce(
          (accumulator, currentSubtotal) => accumulator + currentSubtotal
        );
      draft.total = total;
      draft.formattedTotal = formatPrice(total);
      break;
    }

    case '@cart/REMOVE': {
      const payload = action.payload as RemovePayload;
      const index = draft.products.findIndex(
        product => product.id === payload.id
      );
      if (index >= 0) {
        draft.products.splice(index, 1);

        //If there is any item in the cart, calculate the total, else, just set it to 0
        if (draft.products.length > 0) {
          draft.total = draft.products
            .map(product => product.subtotal)
            .reduce(
              (accumulator, currentSubtotal) => accumulator + currentSubtotal
            );
        } else {
          draft.total = 0;
        }
        draft.formattedTotal = formatPrice(draft.total);
      }
      break;
    }

    case '@cart/UPDATE_AMOUNT': {
      const payload = action.payload as UpdateAmountPayload;
      if (payload.amount < 1) {
        return;
      }

      const index = draft.products.findIndex(
        product => product.id === payload.id
      );
      draft.products[index].amount = payload.amount;
      break;
    }
  }
}, INITIAL_STATE);

export default cart;
