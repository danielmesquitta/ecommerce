import { createGlobalStyle } from 'styled-components';

import breakpoints from './breakpoints';

export default createGlobalStyle`
  /*Default*/
  *,
  *::after,
  *::before{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html{
    scroll-behavior: smooth;
    font-size: 62.5%; /*1rem === 10px*/
    @media screen and (min-width: ${breakpoints.huge}) {
      font-size: 75%;
    }
  }  
  html, body, #root{
    min-height: 100%;
  }
  body{
    background: #f1f1f1 fixed center no-repeat cover;
    -webkit-font-smoothing: antialiased !important;
  }  
  body, input, button{
    font-family: 'Roboto', Arial, Helvetica, sans-serif; 
    font-size: 1.6rem;
  }
  button{
    cursor: pointer;
  }
  a{
    text-decoration: none;
    cursor: pointer;    
  }
  ul{
    list-style: none;
  }
  /*This project*/
  
`;
