import produce from 'immer';

import { Product } from '../../../pages/Home';

export interface ReduxProduct extends Product {
  amount: number;
}

const INITIAL_STATE: ReduxProduct[] = [];

interface Action {
  type: string;
  product: Product;
  id: number;
  amount: number;
}

export default function cart(state = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case '@cart/ADD':
      return produce(state, draft => {
        const productIndex = draft.findIndex(
          prevProduct => prevProduct.id === action.product.id
        );
        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({ ...action.product, amount: 1 });
        }
      });

    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.findIndex(
          prevProduct => prevProduct.id === action.id
        );
        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });

    case '@cart/UPDATE_AMOUNT': {
      if (action.amount <= 0) {
        return state;
      }
      return produce(state, draft => {
        const productIndex = draft.findIndex(
          prevProduct => prevProduct.id === action.id
        );
        if (productIndex >= 0) {
          draft[productIndex].amount = action.amount;
        }
      });
    }

    default:
      return state;
  }
}
