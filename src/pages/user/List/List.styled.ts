import styled from 'styled-components';

const ListContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #1f2937;
  background-color: #f9fafb;
  width: 100%;
`;

const ListTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 24px;
  margin-top: 0;
  color: #1f2937;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

const ListControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const ListSearch = styled.input`
  padding: 10px 16px;
  font-size: 14px;
  border: 2px solid #d1d5db;
  border-radius: 8px;
  background-color: white;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
  width: 70%;

  &:focus {
    border-color: var(--color-button-bg);
    outline: none;
  }

  &::placeholder {
    font-size: 14px;
    color: #9ca3af;
    font-style: italic;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const ListButtonGroup = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 600px) {
    justify-content: flex-start;
  }
`;

const ListTable = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: separate;
  border-spacing: 0 5px;
  color: #222;
`;

const ListTableRow = styled.tr`
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const ListTableHeader = styled.th`
  text-align: left;
  padding: 4px 8px;
  font-weight: 600;
  height: 40px;
  font-size: 16px;
  color: #4b5563;
  user-select: none;
  border-left: 1px solid #e5e7eb;

  &:first-child {
    border-left: none;
  }

  &:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 600px) {
    padding: 8px 10px;
    font-size: 14px;
  }
`;

const ListTableCell = styled.td`
  padding: 4px 8px;
  font-size: 16px;
  border-left: 1px solid #e5e7eb;
  text-align: left;
  max-width: 230px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:first-child {
    border-left: none;
  }

  &:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 600px) {
    padding: 8px 10px;
    font-size: 14px;
    max-width: unset;
  }
`;

const ListCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 16px;
`;

export {
  ListContainer as Container,
  ListTitle as Title,
  ListControlsWrapper as ControlsWrapper,
  ListSearch as Search,
  ListButtonGroup as ButtonGroup,
  ListTable as Table,
  ListTableRow as TableRow,
  ListTableHeader as TableHeader,
  ListTableCell as TableCell,
  ListCardContainer as CardContainer,
};
