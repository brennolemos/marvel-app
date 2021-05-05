import React from 'react';

import CharactersListItem from '../CharactersListItem';
import { fetchApi } from '../../services/api';
import * as S from './CharactersList-styles';

import Loading from '../Loading';
import Error from '../Error';

type Character = {
  id: string;
  name: string;
  thumbnail: {
    extension: string;
    path: string;
  };
};

type SearchProps = {
  name: string;
  offset: number;
};

const CharactersList = ({ name, offset }: SearchProps) => {
  const [data, setData] = React.useState<Character[] | null>(null);
  const [filteredData, setFilteredData] = React.useState<Character[] | null>(
    null,
  );
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const { data } = await fetchApi('characters', offset);
      setFilteredData(data.data.results);
      setData(data.data.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    fetchData();
  }, []);

  React.useEffect(() => {
    const filter =
      data?.filter((character) => character.name.includes(name)) !== undefined
        ? data?.filter((character) =>
            character.name.toLowerCase().includes(name.toLowerCase()),
          )
        : data;
    setFilteredData(filter);
  }, [name]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (filteredData === null) return null;

  return (
    <S.CharactersList>
      {filteredData.map((character) => (
        <CharactersListItem key={character.id} character={character} />
      ))}
    </S.CharactersList>
  );
};

export default CharactersList;
