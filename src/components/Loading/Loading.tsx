import { Loader2 } from 'lucide-react';
import * as S from './Loading.styled';
import type { FC } from 'react';

const Loading: FC<{ text: string }> = ({ text = 'Loading...' }) => (
  <S.Wrapper>
    <S.Icon>
      <Loader2 size={48} strokeWidth={2} />
    </S.Icon>
    {text}
  </S.Wrapper>
);

export default Loading;
