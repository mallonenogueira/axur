import { ReactNode } from 'react';
import { Link, Outlet } from 'react-router-dom';

import logo from '../../assets/logo.png';

import * as S from './styles';

interface Props {
  children: ReactNode;
  loading?: boolean;
}

export function RootLayout({ children }: Props) {
  return (
    <S.Wrapper>
      <S.Header>
        <S.HeaderContainer>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </S.HeaderContainer>
      </S.Header>

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
