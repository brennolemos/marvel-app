import React from 'react';

import { fetchApi } from '../../services/api';
import * as S from './CharactersListItem-styles';

type CharacterProps = {
  character: Character;
};

type Character = {
  id: number;
  name: string;
  thumbnail: {
    extension: string;
    path: string;
  };
};

const CharactersListItem = ({ character }: CharacterProps) => {
  return (
    <S.CharactersListItem>
      <img
        src={`${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`}
        alt=""
      />
      <S.Content>{character.name}</S.Content>
    </S.CharactersListItem>
  );
};

export default CharactersListItem;
