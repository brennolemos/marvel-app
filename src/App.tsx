import React from 'react';

import Header from './components/Header';
import Search from './components/Search';
import CharactersList from './components/CharactersList';

import GlobalStyles from './styles/global';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main className="container">
        <Search />
        <CharactersList />
      </main>
      <Footer />
    </>
  );
}

export default App;
