import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IoLogoEuro, IoIosBasket } from 'react-icons/io';

import { Container, Content, Logo, Cart } from './styles';
import { Product } from '../../pages/Home';
import { ReduxState } from '../../store/modules/rootReducer';

const Header: React.FC = () => {
  const cart = useSelector<ReduxState, Product[]>(state => state.cart);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

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
            <span>{cart.length} items</span>
          </div>
          <IoIosBasket size={36} color="#222" />
        </Cart>
      </Content>
    </Container>
  );
};

export default Header;
