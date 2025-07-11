import styled from 'styled-components';

const ListContainer = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: #222;
`;

const ListTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 24px;
  margin-top: 0;
  color: #1e293b;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

const ListControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const ListButton = styled.button`
  background-color: #4f46e5;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;
  user-select: none;

  &:hover {
    background-color: #4338ca;
    box-shadow: 0 4px 14px rgba(67, 56, 202, 0.4);
  }

  &:focus-visible {
    outline: 3px solid #a5b4fc;
    outline-offset: 2px;
  }
`;

const ListSearch = styled.input`
  flex-grow: 1;
  padding: 10px 16px;
  font-size: 16px;
  border: 2px solid #d1d5db;
  border-radius: 8px;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  &:focus {
    border-color: #4f46e5;
    box-shadow: 0 0 6px rgba(79, 70, 229, 0.5);
    outline: none;
  }

  &::placeholder {
    color: #9ca3af;
    font-style: italic;
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
  min-width: 600px;
  border-collapse: separate;
  border-spacing: 0 5px;
  color: #222;
`;

const ListTableRow = styled.tr`
  background-color: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: background-color 0.2s ease;
`;

const ListTableHeader = styled.th`
  text-align: left;
  padding: 4px 8px;
  font-weight: 600;
  font-size: 16px;
  color: #555;
  user-select: none;

  @media (max-width: 600px) {
    padding: 8px 10px;
    font-size: 14px;
  }
`;

const ListTableCell = styled.td`
  padding: 4px 8px;
  font-size: 15px;
  border-left: 1px solid #eee;
  text-align: left;

  &:first-child {
    border-left: none;
  }

  @media (max-width: 600px) {
    padding: 8px 10px;
    font-size: 14px;
  }
`;

const ListCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 16px;
  justify-content: center;
`;

export {
  ListContainer as Container,
  ListTitle as Title,
  ListControlsWrapper as ControlsWrapper,
  ListButton as Button,
  ListSearch as Search,
  ListButtonGroup as ButtonGroup,
  ListTable as Table,
  ListTableRow as TableRow,
  ListTableHeader as TableHeader,
  ListTableCell as TableCell,
  ListCardContainer as CardContainer,
};
