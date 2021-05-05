import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import Search from './components/Search';
import CharactersList from './components/CharactersList';

import GlobalStyles from './styles/global';
import Footer from './components/Footer';
import CharacterDetails from './components/CharacterDetails';

const App = () => {
  const [name, setName] = React.useState('');
  const [pages, setPages] = React.useState([0]);

  React.useEffect(() => {
    let wait = false;
    const infiniteScroll: EventListener = (event: Event) => {
      const scroll = window.scrollY;
      const height = document.body.offsetHeight - window.innerHeight;
      console.log(scroll, document.body.offsetHeight, window.innerHeight);
      if (scroll > height * 0.75 && !wait) {
        setPages((pages) => [...pages, pages.length * 20]);
        wait = true;

        setTimeout(() => {
          wait = false;
        }, 1000);
      }
    };

    if (name === '') {
      window.addEventListener('wheel', infiniteScroll);
      window.addEventListener('scroll', infiniteScroll);
    }

    return () => {
      window.removeEventListener('wheel', infiniteScroll);
      window.removeEventListener('scroll', infiniteScroll);
    };
  }, []);

  return (
    <HashRouter basename="/">
      <div className="App">
        <GlobalStyles />
        <Header />
        <main className="container">
          <Route path={'/'} exact>
            <Search name={name} setName={setName} />
            {pages.map((page) => (
              <CharactersList key={page} offset={page} name={name} />
            ))}
          </Route>
          <Route path={'/:id'} component={CharacterDetails} />
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
