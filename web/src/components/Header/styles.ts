import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  background: #fafafa;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 120rem;
  width: 100%;
  margin: auto;
  > *:hover {
    opacity: 0.8;
    transition: all 0.2s;
  }
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 2rem;
  color: #222;

  svg {
    margin-right: 0.5rem;
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;

  div {
    text-align: right;
    margin: 1rem 2rem;

    strong {
      display: block;
      color: #222;
    }

    span {
      font-size: 1.2rem;
      color: #555;
    }
  }
`;
