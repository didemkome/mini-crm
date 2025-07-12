import * as S from './Layout.styled.ts';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <S.Container>{children}</S.Container>;
};

export default Layout;
