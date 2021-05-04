import React from 'react';

import CharactersListItem from '../CharactersListItem';
import { fetchApi } from '../../services/api';
import * as S from './CharactersList-styles';

import Loading from '../Loading';
import Error from '../Error';

type Character = {
  id: number;
  name: string;
  thumbnail: {
    extension: string;
    path: string;
  };
};

const CharactersList = () => {
  const [data, setData] = React.useState<Character[] | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const { data } = await fetchApi('characters');
        console.log(data.data.results);
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

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data === null) return null;

  return (
    <S.CharactersList>
      {data.map((character) => (
        <CharactersListItem key={character.id} character={character} />
      ))}
    </S.CharactersList>
  );
};

export default CharactersList;
