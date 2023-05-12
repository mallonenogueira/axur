import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import * as S from './styles';

interface Props {
  children: ReactNode;
  loading?: boolean;
}

export function RootLayout({ children }: Props) {
  return (
    <S.Wrapper>
      <S.Header></S.Header>

      <S.Content>{children}</S.Content>

      <S.Footer>Teste frontend - Mallone W. Nogueira</S.Footer>
    </S.Wrapper>
  );
}

export function ReactRouterLayout() {
  return (
    <RootLayout>
      <Outlet />
    </RootLayout>
  );
}
