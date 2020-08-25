import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosCart } from 'react-icons/io';

import { Container } from './styles';
import api from '../../services/api';
import formatPrice from '../../utils/formatPrice';

import CartActions from '../../store/modules/cart/actions';
import { ReduxState } from '../../store/modules/rootReducer';
import { ReduxProduct } from '../../store/modules/cart/reducer';

interface ApiResponse {
  id: number;
  title: string;
  price: number;
  image: string;
}

export interface Product extends ApiResponse {
  formattedPrice: string;
}

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const cart = useSelector<ReduxState, ReduxProduct[]>(state => state.cart);

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api.get<ApiResponse[]>('products').then(response => {
      const data = response.data.map(product => ({
        ...product,
        formattedPrice: formatPrice(product.price),
      }));
      setProducts(data);
    });
  }, []);

  function handleAddProduct(payload: Product) {
    dispatch(CartActions.addToCart(payload));
  }

  return (
    <Container>
      {products.map((product, index) => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.formattedPrice}</span>

          <button type="button" onClick={() => handleAddProduct(product)}>
            <div>
              <IoIosCart size="1.6rem" color="#fafafa" />
              <span>
                {cart.length > 0 &&
                  cart.findIndex(product => product.id === index + 1) !== -1 &&
                  cart[index].amount}
              </span>
            </div>
            <p>Adiconar ao carrinho</p>
          </button>
        </li>
      ))}
    </Container>
  );
};

export default Home;
