import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.ul`
  display: grid;
  margin: auto;
  max-width: 120rem;
  width: 100%;
  margin-top: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  gap: 2rem;

  li {
    display: flex;
    flex-direction: column;
    background: #fafafa;
    border-radius: 4px;
    padding: 2rem;

    img {
      align-self: center;
      max-width: 25rem;
    }

    > strong {
      font-size: 1.6rem;
      line-height: 2rem;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 2.3rem;
      font-weight: bold;
      margin: 0.5rem 0 2rem;
    }
    button {
      background: steelblue;
      color: #fafafa;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      display: flex;
      align-items: center;
      transition: all 0.2s;

      div {
        display: flex;
        align-items: center;
        padding: 1.2rem;
        background: #0002;

        svg {
          margin-right: 0.5rem;
        }
      }

      p {
        flex: 1;
        align-items: center;
        justify-content: center;
      }

      :hover {
        background: ${darken(0.03, 'steelblue')};
      }
    }
  }
`;
