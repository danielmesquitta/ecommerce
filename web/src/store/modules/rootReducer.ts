import { combineReducers } from 'redux';

import cart from './cart/reducer';
import { Product } from '../../pages/Home';

export interface ReduxState {
  cart: Product[];
}

export default combineReducers({
  cart,
});
