import React, { useState, useEffect } from 'react';
import { IoIosCart } from 'react-icons/io';

import { Container } from './styles';
import api from '../../services/api';
import formatPrice from '../../utils/formatPrice';

interface ApiResponse {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface Product extends ApiResponse {
  formattedPrice: string;
}

const Home: React.FC = () => {
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

  return (
    <Container>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.formattedPrice}</span>

          <button type="button">
            <div>
              <IoIosCart size="1.6rem" color="#fafafa" />
              <span>3</span>
            </div>
            <p>Adiconar ao carrinho</p>
          </button>
        </li>
      ))}
    </Container>
  );
};

export default Home;
