import { Product } from '../../../pages/Home';

const INITIAL_STATE: Product[] = [];

export default function cart(
  state = INITIAL_STATE,
  action: { type: string; payload: Product }
) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];
    default:
      return state;
  }
}
