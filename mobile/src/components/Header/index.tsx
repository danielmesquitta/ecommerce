import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Container, Logo, LogoText, Cart, Amount, AmountText } from './styles';

const Header: React.FC = () => {
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
        <Amount>
          <AmountText>2</AmountText>
        </Amount>
      </Cart>
    </Container>
  );
};

export default Header;
