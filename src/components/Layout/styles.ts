import styled, { css } from 'styled-components';

const container = css`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  ${({ theme }) => css`
    width: 100%;
    background: ${theme.colors.header};
    position: sticky;
    top: 0;
    left: 0;
    box-shadow: ${theme.boxShadow.header};
    z-index: 100;
  `}
`;

export const HeaderContainer = styled.div`
  ${container}

  align-items: center;
  display: flex;
  height: 9rem;

  img {
    padding: 1.5rem 0;
  }
`;

export const Content = styled.main`
  ${container}

  flex: 1;
  padding-top: 5rem;
`;

export const Footer = styled.footer`
  height: 9rem;
  width: 100%;
  top: 0;
  left: 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
