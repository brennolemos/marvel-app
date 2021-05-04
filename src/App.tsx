import React from 'react';

import Header from './components/Header';
import Search from './components/Search';
import CharactersList from './components/CharactersList';

import GlobalStyles from './styles/global';
import Footer from './components/Footer';
import CharacterDetails from './components/CharacterDetails';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <main className="container">
        <Search />
        <CharactersList />
        <CharacterDetails />
      </main>
      <Footer />
    </div>
  );
}

export default App;
