import styled, { css } from 'styled-components';

const UserCardListContainer = styled.div<{ $isVirtualized?: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;

  ${({ $isVirtualized }) =>
    !$isVirtualized &&
    css`
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      margin-top: 16px;
    `}
`;

export const UserCardListGridItem = styled.div`
  padding: 0 8px;
  box-sizing: border-box;
`;

export { UserCardListContainer as Container, UserCardListGridItem as GridItem };
