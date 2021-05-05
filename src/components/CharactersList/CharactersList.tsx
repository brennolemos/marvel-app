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
  setName: (name: string) => void;
};

const CharactersList = ({ name }: SearchProps) => {
  const [data, setData] = React.useState<Character[] | null>(null);
  const [filteredData, setFilteredData] = React.useState<Character[] | null>(
    null,
  );
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const { data } = await fetchApi('characters');
        console.log(data.data.results);
        setFilteredData(data.data.results);
        setData(data.data.results);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
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
      {filteredData.length
        ? filteredData.map((character) => (
            <CharactersListItem key={character.id} character={character} />
          ))
        : 'Não há itens correspondentes com a pesquisa'}
    </S.CharactersList>
  );
};

export default CharactersList;
