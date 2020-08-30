import React from 'react';

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

const Cart: React.FC = () => {
  return (
    <Container>
      <Table>
        <CartItem />
        <Footer>
          <Total>
            Total {'\n'}
            <TotalPrice>R$250,00</TotalPrice>
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
