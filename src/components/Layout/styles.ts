import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  height: 9rem;
  width: 100%;
  background-color: #333;
  position: sticky;
  top: 0;
  left: 0;
`;

export const Content = styled.main`
  flex: 1;
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
