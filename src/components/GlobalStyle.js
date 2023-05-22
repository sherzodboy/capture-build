import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #1b1b1b;
    font-family: 'Oswald', sans-serif;

  }

  button {
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background-color: transparent;
    color: #FFFFFF;
    transition: all 0.5s ease;
    &:hover {
      background-color: #23d997;
      color: #FFFFFF;
    }
  }
  h2 {
    font-weight: lighter;
    font-size: 4rem;
  }
  h3 {
    color: #FFFFFF;
  }
  h4 {
    font-weight: bold;
    font-size: 2rem;
  }
  a {
    font-size: 1.1rem;
  }
  span {
    color: #23d997;
    font-weight: bold;
  }
  p {
    padding: 3rem 0rem;
    color: gray;
    font-size: 1.4rem;
    line-height: 150%;
  }

`;

export default GlobalStyle;
