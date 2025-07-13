import styled from 'styled-components';

const ButtonButton = styled.button`
  background-color: var(--color-button-bg);
  color: var(--color-button-text);
  border-radius: 4px;
  padding: 10px 16px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: 40px;

  &:hover {
    background-color: var(--color-button-hover-bg);
  }

  &:focus-visible {
    outline: 3px solid #c4b5fd;
  }

  &:disabled {
    background-color: #e5e7eb;
    color: #9ca3af;
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export { ButtonButton as Button };
