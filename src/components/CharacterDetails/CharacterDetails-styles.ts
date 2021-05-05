import styled from 'styled-components';

export const InfosWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  border-radius: 0.25rem;
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  overflow: hidden;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  h1 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  p {
    line-height: 1.4;
    max-width: 25rem;
    text-align: center;
  }
`;

export const Image = styled.div`
  background-size: cover;
  background-position: center center;
  border-right: 1px solid var(--gray-fa);

  &::after {
    content: '';
    display: block;
    height: 0;
    padding-bottom: 75%;
  }
`;

export const ListsWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const List = styled.div`
  padding: 1rem;
  border-radius: 0.25rem;
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);

  h2 {
    text-align: center;
  }

  li {
    border-bottom: 1px solid var(--gray-fa);
    padding: 1rem 0;

    &:last-child {
      border: none;
    }
  }
`;
