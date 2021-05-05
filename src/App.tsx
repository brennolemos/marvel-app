import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import Search from './components/Search';
import CharactersList from './components/CharactersList';

import GlobalStyles from './styles/global';
import Footer from './components/Footer';
import CharacterDetails from './components/CharacterDetails';

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <GlobalStyles />
        <Header />
        <main className="container">
          <Route path={'/'} exact>
            <Search />
            <CharactersList />
          </Route>
          <Route path={'/:id'} component={CharacterDetails} />
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
