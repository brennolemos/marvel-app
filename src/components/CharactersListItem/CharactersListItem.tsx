import React from 'react';
import { NavLink } from 'react-router-dom';

import { fetchApi } from '../../services/api';
import * as S from './CharactersListItem-styles';

type CharacterProps = {
  character: Character;
};

type Character = {
  id: string;
  name: string;
  thumbnail: {
    extension: string;
    path: string;
  };
};

const CharactersListItem = ({ character }: CharacterProps) => {
  return (
    <NavLink to={`${character.id}`}>
      <S.CharactersListItem>
        <img
          src={`${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`}
          alt=""
        />
        <S.Content>{character.name}</S.Content>
      </S.CharactersListItem>
    </NavLink>
  );
};

export default CharactersListItem;
