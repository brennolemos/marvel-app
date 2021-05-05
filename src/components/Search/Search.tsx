import React, { FormEvent } from 'react';

import * as S from './Search-styles';

type SearchProps = {
  name: string;
  setName: (name: string) => void;
};

const Search = ({ name, setName }: SearchProps) => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Search
        name="search"
        id="search"
        type="text"
        placeholder="Input search text..."
        required
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
      <S.Button type="submit"></S.Button>
    </S.Form>
  );
};

export default Search;
