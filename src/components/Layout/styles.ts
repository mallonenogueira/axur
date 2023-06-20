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
  width: 100%;
  background-color: #333;
  position: sticky;
  top: 0;
  left: 0;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  z-index: 100;
`;

export const HeaderContainer = styled.div`
  height: 9rem;
  ${container}
  display: flex;
  align-items: center;

  img {
    padding: 1.5rem 0;
  }
`;

export const Content = styled.main`
  flex: 1;
  padding-top: 5rem;
  ${container}
`;

export const Box = styled.main`
  background: gray;
  height: 9rem;
  width: 9rem;
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
