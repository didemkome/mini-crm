import styled, { css } from 'styled-components';

const UserListTableContainer = styled.div`
  overflow: hidden;
  width: 100%;

  @media (max-width: 768px) {
    overflow-x: auto !important;
  }
`;

const UserListTableHeader = styled.div`
  display: flex;
  background-color: #f9fafb;
  font-weight: 600;
  color: #4b5563;
  user-select: none;
  border-bottom: 1px solid #e5e7eb;

  @media (max-width: 768px) {
    max-width: 800px;
    min-width: 800px;
  }
`;

const UserListTableRow = styled.div`
  display: flex;
  border-bottom: 1px solid #e5e7eb;

  &:hover {
    background-color: #f3f4f6;
  }

  @media (max-width: 768px) {
    max-width: 800px;
    min-width: 800px;
  }
`;

const UserListTableCell = styled.div<{ $isSticky?: boolean }>`
  flex: 1;
  padding: 12px 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  align-content: center;

  &:first-child,
  &:nth-child(2) {
    flex: 2;
  }

  @media (max-width: 768px) {
    ${({ $isSticky }) =>
      $isSticky &&
      css`
        position: sticky;
        right: 0;
        background: white;
        z-index: 2;
        flex: 0 0 50px;
      `}
  }
`;

export {
  UserListTableContainer as Container,
  UserListTableHeader as Header,
  UserListTableRow as Row,
  UserListTableCell as Cell,
};
