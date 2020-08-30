import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  Container,
  ImageContainer,
  Image,
  TextContainer,
  Title,
  Price,
  Button,
  IconContainer,
  Amount,
  ButtonText,
} from './styles';

import { ReduxState, Cart, Product, ApiResponse } from '~/@types';

import CartActions from '~/store/modules/cart/actions';

interface Props {
  item: ApiResponse;
}

const ListItem: React.FC<Props> = ({ item }) => {
  const cart = useSelector<ReduxState, Cart>(state => state.cart);
  const dispatch = useDispatch();

  const [productFoundInCart, setProductFoundInCart] = useState<Product>();

  function onAddToCart() {
    dispatch(CartActions.addToCart(item));
  }

  useEffect(() => {
    setProductFoundInCart(
      cart.products.find(product => product.id === item.id)
    );
  }, [cart, item.id]);

  return (
    <Container>
      <ImageContainer>
        <Image source={{ uri: item.image }} />
      </ImageContainer>

      <TextContainer>
        <Title>{item.title}</Title>
        <Price>R${item.price}</Price>
      </TextContainer>

      <Button onPress={onAddToCart}>
        <IconContainer>
          <Icon name="md-cart" color="#fafafa" size={20} />
          <Amount>{productFoundInCart && productFoundInCart.amount}</Amount>
        </IconContainer>
        <ButtonText>Adicionar ao carrinho</ButtonText>
      </Button>
    </Container>
  );
};

export default ListItem;
