import React from 'react';

import logo from '../../assets/marvel_logo.svg';
import * as S from './Header-styles';

const Header = () => {
  return (
    <S.Header>
      <img src={logo} alt="Marvel" />
    </S.Header>
  );
};

export default Header;
