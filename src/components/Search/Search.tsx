import React from 'react';

import * as S from './Search-styles';

const Search = () => {
  const [name, setName] = React.useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Search
        name="search"
        id="search"
        type="text"
        placeholder="Buscar..."
        required
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
      <S.Button type="submit"></S.Button>
    </S.Form>
  );
};

export default Search;
