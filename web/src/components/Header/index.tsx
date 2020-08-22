import React from 'react';
import { IoLogoEuro, IoIosBasket } from 'react-icons/io';

import { Container, Content, Logo, Cart } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Logo to="/">
          <IoLogoEuro size="3rem" color="#222" />
          eCommerce
        </Logo>

        <Cart to="/cart">
          <div>
            <strong>Meu carrinho</strong>
            <span>3 items</span>
          </div>
          <IoIosBasket size={36} color="#222" />
        </Cart>
      </Content>
    </Container>
  );
};

export default Header;
