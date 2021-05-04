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

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  }

  .App {
    display: flex;
min-height: 100vh;
flex-direction: column;
  }

  .container {
    padding: 2rem 1.5rem;
    background-color: var(--gray);
    flex: 1 1;
  }
`;
