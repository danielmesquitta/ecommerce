import React from 'react';
import {
  IoIosRemoveCircleOutline,
  IoIosAddCircleOutline,
  IoIosTrash,
} from 'react-icons/io';

import { Container, ProductTable, Total } from './styles';

const Cart: React.FC = () => {
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
          <tr>
            <td>
              <img
                src="data:image/png;base64,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"
                alt=""
              />
            </td>
            <td>
              <strong>Tenis</strong>
              <span>R$129,90</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <IoIosRemoveCircleOutline size="2rem" color="steelblue" />
                </button>
                <input type="number" readOnly value={3} />
                <button type="button">
                  <IoIosAddCircleOutline size="2rem" color="steelblue" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$360,00</strong>
            </td>
            <td>
              <button>
                <IoIosTrash size="2rem" color="steelblue" />
              </button>
            </td>
          </tr>
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
