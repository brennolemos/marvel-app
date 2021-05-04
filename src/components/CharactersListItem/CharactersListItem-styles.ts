import styled from 'styled-components';

export const CharactersListItem = styled.li`
  background-color: var(--white);
  border-radius: 0.25rem;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
  border: 1px solid transparent;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    margin-top: -0.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const Content = styled.p`
  padding: 1rem;
`;
