import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0%;
    padding: 0;
    box-sizing: border-box;
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

  :root {
    --white: #fff;
  }

  .container {
    margin: 2rem 0;
    padding: 0 1.5rem;
  }
`;
