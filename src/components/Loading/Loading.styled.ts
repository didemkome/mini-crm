import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const LoadingIcon = styled.div`
  animation: ${spin} 1s linear infinite;
  svg {
    stroke: #7c3aed;
  }
`;

const LoadingWrapper = styled.div`
  padding: 24px;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  color: #4b5563;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export { LoadingWrapper as Wrapper, LoadingIcon as Icon };
