import styled from 'styled-components';

export const CharactersList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;
