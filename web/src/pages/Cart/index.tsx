import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  IoIosRemoveCircleOutline,
  IoIosAddCircleOutline,
  IoIosTrash,
} from 'react-icons/io';

import { Container, ProductTable, Total } from './styles';

import { ReduxState } from '../../store/modules/rootReducer';
import { ReduxProduct } from '../../store/modules/cart/reducer';
import CartActions from '../../store/modules/cart/actions';

const Cart: React.FC = () => {
  const cart = useSelector<ReduxState, ReduxProduct[]>(state => state.cart);
  const dispatch = useDispatch();

  function handleRemove(id: number) {
    dispatch(CartActions.removeFromCart(id));
  }

  function handleIncrement(product: ReduxProduct) {
    dispatch(CartActions.updateAmount(product.id, product.amount + 1));
  }

  function handleDecrement(product: ReduxProduct) {
    dispatch(CartActions.updateAmount(product.id, product.amount - 1));
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>Produto</th>
            <th>Qtd</th>
            <th>Subtotal</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <tr>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.formattedPrice}</span>
              </td>
              <td>
                <div>
                  <button
                    type="button"
                    onClick={() => handleDecrement(product)}
                  >
                    <IoIosRemoveCircleOutline size="2rem" color="steelblue" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button
                    type="button"
                    onClick={() => handleIncrement(product)}
                  >
                    <IoIosAddCircleOutline size="2rem" color="steelblue" />
                  </button>
                </div>
              </td>
              <td>
                <strong>R$360,00</strong>
              </td>
              <td>
                <button onClick={() => handleRemove(product.id)}>
                  <IoIosTrash size="2rem" color="steelblue" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>Total</span>
          <strong>R$360,00</strong>
        </Total>
      </footer>
    </Container>
  );
};

export default Cart;
