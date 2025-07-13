import * as S from './NotFoundMessage.styled';
import type { FC } from 'react';
import { AlertCircle } from 'lucide-react';

type NotFoundMessageProps = {
  text?: string;
};

const NotFoundMessage: FC<NotFoundMessageProps> = ({ text = 'Not found.' }) => (
  <S.Container>
    <AlertCircle size={48} strokeWidth={1.5} color="#ff6b6b" />
    <S.Message>{text}</S.Message>
  </S.Container>
);

export default NotFoundMessage;
