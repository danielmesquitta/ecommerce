import React from 'react';
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

interface Props {}

const CartItem: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderImage
          source={{
            uri:
              'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
          }}
        />

        <HeaderText>
          <HeaderTitle>Tenis de caminhada leve confortavel</HeaderTitle>
          <HeaderPrice>R$179,90</HeaderPrice>
        </HeaderText>

        <DeleteButton>
          <Icon name="trash" color="steelblue" size={24} />
        </DeleteButton>
      </Header>

      <Footer>
        <Amount>
          <Icon name="remove-circle-outline" color="steelblue" size={24} />

          <AmountQty value="2" editable={false} />

          <Icon name="add-circle-outline" color="steelblue" size={24} />
        </Amount>
        <Subtotal>R$179,90</Subtotal>
      </Footer>
    </Container>
  );
};

export default CartItem;
