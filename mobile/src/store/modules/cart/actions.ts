import { ApiResponse } from '~/@types';

export default {
  addToCart(product: ApiResponse) {
    return { type: '@cart/ADD', payload: product };
  },

  removeFromCart(id: number) {
    return { type: '@cart/REMOVE', payload: { id } };
  },

  updateAmount(id: number, amount: number) {
    return { type: '@cart/UPDATE_AMOUNT', payload: { id, amount } };
  },
};

export type AddPayload = ApiResponse;

export type RemovePayload = { id: number };

export type UpdateAmountPayload = { id: number; amount: number };

export type Payload = AddPayload | RemovePayload | UpdateAmountPayload;
