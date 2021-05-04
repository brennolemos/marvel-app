import React from 'react';

import Header from './components/Header';
import Search from './components/Search';
import GlobalStyles from './styles/global';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main className="container">
        <Search />
      </main>
    </>
  );
}

export default App;
