import styled from 'styled-components';

export const NotFoundMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
  color: #ff6b6b;
`;

export const NotFoundMessageMessage = styled.p`
  margin-top: 16px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;

export { NotFoundMessageContainer as Container, NotFoundMessageMessage as Message };
