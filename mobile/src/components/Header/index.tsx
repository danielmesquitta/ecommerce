import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Container, Logo, LogoText, Cart, Amount, AmountText } from './styles';
import { ReduxState, Cart as ICart } from '~/@types';

const Header: React.FC = () => {
  const cart = useSelector<ReduxState, ICart>(state => state.cart);
  const navigation = useNavigation();

  function handleNavigateToHome() {
    navigation.navigate('Home');
  }

  function handleNavigateToCart() {
    navigation.navigate('Cart');
  }

  return (
    <Container>
      <Logo onPress={handleNavigateToHome}>
        <Icon name="logo-euro" color="#222" size={30} />
        <LogoText>eCommerce</LogoText>
      </Logo>

      <Cart onPress={handleNavigateToCart}>
        <Icon name="md-cart" color="#222" size={40} />
        {cart.products.length > 0 && (
          <Amount>
            <AmountText>{cart.products.length}</AmountText>
          </Amount>
        )}
      </Cart>
    </Container>
  );
};

export default Header;
