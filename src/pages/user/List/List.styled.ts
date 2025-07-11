import styled from 'styled-components';

const ListContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  color: #222;

  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`;

const ListTable = styled.table`
  width: 100%;
  min-width: 600px;
  border-collapse: separate;
  border-spacing: 0 0.75rem;
  margin-top: 1rem;
  color: #222;
`;

const ListTTableRow = styled.tr`
  background-color: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f0f4ff;
  }
`;

const ListTTableHeader = styled.th`
  text-align: left;
  padding: 12px 16px;
  font-weight: 600;
  font-size: 1rem;
  color: #555;
  user-select: none;

  @media (max-width: 600px) {
    padding: 8px 10px;
    font-size: 0.9rem;
  }
`;

const ListTTableCell = styled.td`
  padding: 12px 16px;
  font-size: 0.95rem;
  border-left: 1px solid #eee;
  text-align: left;

  &:first-child {
    border-left: none;
  }

  @media (max-width: 600px) {
    padding: 8px 10px;
    font-size: 0.85rem;
  }
`;

export {
  ListContainer as Container,
  ListTable as Table,
  ListTTableRow as TableRow,
  ListTTableHeader as TableHeader,
  ListTTableCell as TableCell,
};
