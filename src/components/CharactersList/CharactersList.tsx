import React from 'react';

import { fetchApi } from '../../services/api';

type Character = {
  id: number;
  name: string;
  thumbnail: {
    path: string;
  };
};

const CharactersList = () => {
  const [data, setData] = React.useState<Character[] | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const { data } = await fetchApi('characters');
        console.log(data.data.results);
        setData(data.data.results);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro</div>;
  if (data === null) return null;

  return (
    <ul>
      {data.map((character) => (
        <li>{character.name}</li>
      ))}
    </ul>
  );
};

export default CharactersList;
