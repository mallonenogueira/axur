import styled from 'styled-components';

export const Background = styled.div`
  background: #22222222;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 10000;
`;

export const Wrapper = styled.section`
  background: #fff;
  min-width: 50rem;
  border-radius: 0.4rem;
  box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.1);
`;
