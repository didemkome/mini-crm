import styled from 'styled-components';

const UserListTableContainer = styled.div`
  overflow: hidden;
  width: 100%;
`;

const UserListTableHeader = styled.div`
  display: flex;
  background-color: #f9fafb;
  font-weight: 600;
  color: #4b5563;
  user-select: none;
  border-bottom: 1px solid #e5e7eb;
`;

const UserListTableRow = styled.div`
  display: flex;
  border-bottom: 1px solid #e5e7eb;
  &:hover {
    background-color: #f3f4f6;
  }
`;

const UserListTableCell = styled.div`
  flex: 1;
  padding: 12px 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;

  &:first-child,
  &:nth-child(2) {
    flex: 2;
  }
`;

export {
  UserListTableContainer as Container,
  UserListTableHeader as Header,
  UserListTableRow as Row,
  UserListTableCell as Cell,
};
