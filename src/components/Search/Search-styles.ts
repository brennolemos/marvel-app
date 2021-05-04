import styled from 'styled-components';

import icon from '../../assets/search.svg';

export const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  padding: 0 0.5rem;
`;

export const Search = styled.input`
  border-radius: 0.25rem;
  border: 1px solid #fff;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  transition: all 0.3s ease;
  font-size: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  border: none;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
    transform: scale(1.1);
  }
`;

export const Button = styled.button`
  width: 62px;
  height: 62px;
  background: url(${icon}) no-repeat center center;
  text-indent: -150px;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  outline: none;
  box-shadow: none;
`;
