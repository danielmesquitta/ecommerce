import React from 'react';
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
  ButtonText,
} from './styles';
import ApiResponse from '~/@types/ApiResponse';

interface Props {
  item: ApiResponse;
}

const ListItem: React.FC<Props> = ({ item }) => {
  return (
    <Container>
      <ImageContainer>
        <Image source={{ uri: item.image }} />
      </ImageContainer>

      <TextContainer>
        <Title>{item.title}</Title>
        <Price>R${item.price}</Price>
      </TextContainer>

      <Button>
        <IconContainer>
          <Icon name="md-cart" color="#fafafa" size={20} />
        </IconContainer>
        <ButtonText>Adicionar ao carrinho</ButtonText>
      </Button>
    </Container>
  );
};

export default ListItem;
