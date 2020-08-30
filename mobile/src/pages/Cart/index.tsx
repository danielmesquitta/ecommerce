import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import {
  Container,
  Table,
  Footer,
  Button,
  ButtonText,
  Total,
  TotalPrice,
} from './styles';

import CartItem from '~/components/CartItem';
import { ReduxState, Cart as ICart } from '~/@types';

const Cart: React.FC = () => {
  const cart = useSelector<ReduxState, ICart>(state => state.cart);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Container>
      <Table>
        {cart.products.map(product => (
          <CartItem product={product} key={product.id} />
        ))}
        <Footer>
          <Total>
            Total {'\n'}
            <TotalPrice>{cart.formattedTotal}</TotalPrice>
          </Total>
          <Button>
            <ButtonText>Finalizar Pedido</ButtonText>
          </Button>
        </Footer>
      </Table>
    </Container>
  );
};

export default Cart;
