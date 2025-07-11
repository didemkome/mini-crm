import styled from 'styled-components';

const UserCardContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  width: calc(33.333% - 16px);
  box-sizing: border-box;

  @media (max-width: 900px) {
    width: calc(50% - 16px);
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const UserCardTitle = styled.h3`
  margin: 0 0 8px 0;
  font-size: 1.25rem;
  color: #222;
`;

const UserCardText = styled.p`
  margin: 4px 0;
  color: #555;
  font-size: 1rem;
`;

export { UserCardText as Text, UserCardTitle as Title, UserCardContainer as Container };
