import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #fff;
    --gray: #fafafa;
  }

  ul, li {
    margin: 0;
    padding: 0;
  } 

  li {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  html, body, #root {
    height: 100%;
  }

  *, button, input {
    border: 0;
    outline: 0;

    font-family: 'Oxygen', sans-serif;
    color: #202020;
  }

  a {
    text-decoration: none;
  }

  .App {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    background-color: var(--gray);
  }

  .container {
    padding: 2rem 1.5rem;
    flex: 1 1;
    max-width: 75rem;
    margin: 0 auto;
  }
`;
