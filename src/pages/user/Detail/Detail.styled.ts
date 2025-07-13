import styled, { keyframes } from 'styled-components';

const DetailPageTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 24px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 22px;
    margin-bottom: 16px;
  }
`;

const DetailUserName = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 8px;
  word-break: break-word;
`;

const DetailEmail = styled.p`
  font-size: 16px;
  color: #4b5563;
  margin-bottom: 8px;
  word-break: break-word;
`;

const DetailMapTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
  color: #4b5563;
`;

const DetailMapWrapper = styled.div`
  height: 420px;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 24px;

  @media (max-width: 600px) {
    height: 320px;
  }
`;

const DetailNotFoundMessage = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  margin-top: 40px;
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const DetailLoadingIcon = styled.div`
  animation: ${spin} 1s linear infinite;
  svg {
    stroke: #7c3aed;
  }
`;

const DetailLoadingWrapper = styled.div`
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

export {
  DetailPageTitle as PageTitle,
  DetailUserName as UserName,
  DetailEmail as Email,
  DetailMapTitle as MapTitle,
  DetailMapWrapper as MapWrapper,
  DetailNotFoundMessage as NotFoundMessage,
  DetailLoadingWrapper as LoadingWrapper,
  DetailLoadingIcon as LoadingIcon,
};
