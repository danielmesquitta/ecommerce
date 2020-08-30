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

  function handleRemove(id: number) {
    dispatch(CartActions.removeFromCart(id));
  }

  function handleIncrement(id: number, amount: number) {
    dispatch(CartActions.updateAmount(id, amount + 1));
  }

  function handleDecrement(id: number, amount: number) {
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

        <DeleteButton onPress={() => handleRemove(product.id)}>
          <Icon name="trash" color="steelblue" size={24} />
        </DeleteButton>
      </Header>

      <Footer>
        <Amount>
          <TouchableOpacity
            onPress={() => handleDecrement(product.id, product.amount)}>
            <Icon name="remove-circle-outline" color="steelblue" size={24} />
          </TouchableOpacity>

          <AmountQty value={String(product.amount)} editable={false} />

          <TouchableOpacity
            onPress={() => handleIncrement(product.id, product.amount)}>
            <Icon name="add-circle-outline" color="steelblue" size={24} />
          </TouchableOpacity>
        </Amount>
        <Subtotal>{product.formattedSubtotal}</Subtotal>
      </Footer>
    </Container>
  );
};

export default CartItem;
