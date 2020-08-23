import { combineReducers } from 'redux';

import cart from './cart/reducer';
import { ReduxProduct } from './cart/reducer';

export interface ReduxState {
  cart: ReduxProduct[];
}

export default combineReducers({
  cart,
});
