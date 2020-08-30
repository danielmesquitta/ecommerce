import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  Container,
  Header,
  HeaderImage,
  HeaderText,
  HeaderTitle,
  HeaderPrice,
  DeleteButton,
  Footer,
  Amount,
  AmountQty,
  Subtotal,
} from './styles';

import { Product } from '~/@types';
import CartActions from '~/store/modules/cart/actions';

interface Props {
  product: Product;
}

const CartItem: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch();
  const { id, amount } = product;

  function handleRemove() {
    dispatch(CartActions.removeFromCart(id));
  }

  function handleIncrement() {
    dispatch(CartActions.updateAmount(id, amount + 1));
  }

  function handleDecrement() {
    dispatch(CartActions.updateAmount(id, amount - 1));
  }

  return (
    <Container>
      <Header>
        <HeaderImage
          source={{
            uri: product.image,
          }}
        />

        <HeaderText>
          <HeaderTitle>{product.title}</HeaderTitle>
          <HeaderPrice>{product.formattedPrice}</HeaderPrice>
        </HeaderText>

        <DeleteButton onPress={handleRemove}>
          <Icon name="trash" color="steelblue" size={24} />
        </DeleteButton>
      </Header>

      <Footer>
        <Amount>
          <TouchableOpacity onPress={handleDecrement}>
            <Icon name="remove-circle-outline" color="steelblue" size={24} />
          </TouchableOpacity>

          <AmountQty value={String(amount)} editable={false} />

          <TouchableOpacity onPress={handleIncrement}>
            <Icon name="add-circle-outline" color="steelblue" size={24} />
          </TouchableOpacity>
        </Amount>
        <Subtotal>{product.formattedSubtotal}</Subtotal>
      </Footer>
    </Container>
  );
};

export default CartItem;
