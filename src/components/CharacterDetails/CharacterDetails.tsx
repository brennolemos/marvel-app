import React from 'react';
import { useParams } from 'react-router-dom';

import { fetchApi } from '../../services/api';
import Loading from '../Loading';
import Error from '../Error';

import * as S from './CharacterDetails-styles';

type ParamsProps = {
  id: string;
};

type CharacterDetailsProps = {
  id: string;
  name: string;
  description: string;
  comics: {
    items: Info[];
  };
  series: {
    items: Info[];
  };
  stories: {
    items: Info[];
  };
  thumbnail: {
    extension: string;
    path: string;
  };
};

type Info = {
  name: string;
};

const CharacterDetails = () => {
  const { id } = useParams<ParamsProps>();

  const [data, setData] = React.useState<CharacterDetailsProps | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const { data } = await fetchApi(`characters/${id}`);
        console.log(data.data.results[0]);
        setData(data.data.results[0]);
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
    <S.Wrapper>
      <div>
        <h1>Name: {data.name}</h1>
        <p>Description: {data.description}</p>
        <ul>
          {data.comics.items.map((item) => (
            <li>{item.name}</li>
          ))}
        </ul>

        <ul>
          {data.series.items.map((item) => (
            <li>{item.name}</li>
          ))}
        </ul>

        <ul>
          {data.stories.items.map((item) => (
            <li>{item.name}</li>
          ))}
        </ul>
      </div>

      <S.Image
        style={{
          backgroundImage: `url('${data.thumbnail.path}.${data.thumbnail.extension}')`,
        }}
      ></S.Image>
    </S.Wrapper>
  );
};

export default CharacterDetails;
