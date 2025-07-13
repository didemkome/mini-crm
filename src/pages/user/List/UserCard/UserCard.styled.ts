import styled, { css } from 'styled-components';

const UserCardContainer = styled.div<{ $isPaginated: boolean }>`
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 12px;
  box-sizing: border-box;

  ${({ $isPaginated }) =>
    $isPaginated
      ? css`
          width: calc(25% - 16px);

          @media (max-width: 900px) {
            width: calc(50% - 12px);
          }

          @media (max-width: 600px) {
            width: 100%;
          }
        `
      : css`
          width: 100%;
        `}
`;

const UserCardTitle = styled.h3`
  margin: 0 0 8px 0;
  font-size: 16px;
  color: #222;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 90%;
`;

const UserCardText = styled.p`
  margin: 4px 0;
  color: #555;
  font-size: 14px;
  max-width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export { UserCardText as Text, UserCardTitle as Title, UserCardContainer as Container };
