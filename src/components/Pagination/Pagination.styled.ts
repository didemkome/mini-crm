import Button from '@/components/UI/Button/Button.tsx';
import styled from 'styled-components';

const PaginationWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
`;

const PaginationPageButton = styled(Button)<{ $active?: boolean }>`
  font-weight: normal;

  ${({ $active }) =>
    $active &&
    `
    font-weight: 700;
    background-color: var(--color-button-hover-bg);
    color: var(--color-button-text);
    pointer-events: none;
    transition: none;
  `}
`;

const PaginationEllipsis = styled.span`
  align-self: center;
  user-select: none;
`;

export {
  PaginationWrapper as Wrapper,
  PaginationPageButton as PageButton,
  PaginationEllipsis as Ellipsis,
};
