import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  Table,
  Footer,
  Button,
  ButtonText,
  Total,
  TotalPrice,
  Warning,
  WarningText,
  GoBackLink,
  GoBackLinkText,
} from './styles';

import CartItem from '~/components/CartItem';
import { ReduxState, Cart as ICart } from '~/@types';

const Cart: React.FC = () => {
  const cart = useSelector<ReduxState, ICart>(state => state.cart);
  const { goBack } = useNavigation();

  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    setIsEmpty(cart.products.length === 0);
  }, [cart]);

  return (
    <Container>
      {isEmpty ? (
        <Warning>
          <Icon name="cart-off" color="#aaa" size={50} />
          <WarningText>Ops! Parece que seu carrinho está vazio</WarningText>
          <GoBackLink onPress={goBack}>
            <GoBackLinkText>Volte para a página inicial</GoBackLinkText>
          </GoBackLink>
        </Warning>
      ) : (
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
      )}
    </Container>
  );
};

export default Cart;
