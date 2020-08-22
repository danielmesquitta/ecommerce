import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 3rem;
  background: #fafafa;
  border-radius: 4px;
  width: 100%;
  max-width: 120rem;
  margin: auto;

  footer {
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: steelblue;
      color: #fafafa;
      border: 0;
      border-radius: 4px;
      padding: 1.2rem 2rem;
      font-weight: bold;
      text-transform: uppercase;
      transition: all 0.2s;

      :hover {
        background: ${darken(0.03, 'steelblue')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 1.2rem;
    text-transform: uppercase;
  }

  tbody td {
    padding: 1.2rem;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 10rem;
  }

  strong {
    color: #222;
    display: block;
  }

  span {
    display: block;
    margin-top: 0.5rem;
    font-size: 1.8rem;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      background: #fafafa;
      padding: 0.6rem 0;
      width: 5rem;
      text-align: center;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 0.6rem;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    text-transform: uppercase;
    font-weight: bold;
  }

  strong {
    font-size: 2rem;
    margin-left: 0.5rem;
  }
`;
