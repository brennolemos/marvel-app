import React from 'react';

import api from '../../services/api';

const CharactersList = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const { data } = await api.get('/');
        setData(data);
      } catch (err) {
        setError(err.response.status);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro</div>;
  if (data === null) return null;

  return <h1>CharactersList</h1>;
};

export default CharactersList;
