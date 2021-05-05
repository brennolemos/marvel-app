import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/marvel_logo.svg';
import * as S from './Header-styles';

const Header = () => {
  return (
    <NavLink exact to="/">
      <S.Header>
        <img src={logo} alt="Marvel" />
      </S.Header>
    </NavLink>
  );
};

export default Header;
