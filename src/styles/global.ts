import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #fff;
    --gray-fa: #fafafa;
    --gray-e: #eee;
    --gray-20: #202020;

    --red: #721c24;
    --marvel-red: #ED1D24;
    --pink: #f8d7da;
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


  *, button, input {
    border: 0;
    outline: 0;

    font-family: 'Oxygen', sans-serif;
    color: var(--gray-20);
  }

  a {
    text-decoration: none;
  }

  .App {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    background-color: var(--gray-fa);
  }

  .container {
    padding: 2rem 1.5rem;
    flex: 1 1;
    max-width: 75rem;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 576px) {
    html {
      font-size: 87.5%;
    }
  }
`;
