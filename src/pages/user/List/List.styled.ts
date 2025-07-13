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

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const ListControlsWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ListSearch = styled.input`
  font-size: 14px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  background-color: white;
  transition: border-color 0.3s ease;
  width: 70%;

  &:focus {
    border-color: var(--color-button-bg);
    outline: none;
  }

  &::placeholder {
    font-size: 14px;
    color: #9ca3af;
    font-style: italic;
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 40px;
  }
`;

const ListButtonGroup = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const ListOuterContainer = styled.div`
  overflow: scroll;
  width: 100% !important;

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #a3a3a3;
    border-radius: 4px;
  }
`;

const ListNoDataMessage = styled.div`
  padding: 20px;
  text-align: center;
  color: #888;
  font-size: 16px;
`;

export {
  ListContainer as Container,
  ListTitle as Title,
  ListControlsWrapper as ControlsWrapper,
  ListSearch as Search,
  ListButtonGroup as ButtonGroup,
  ListOuterContainer as OuterContainer,
  ListNoDataMessage as NoDataMessage,
};
