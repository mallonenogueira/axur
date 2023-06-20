import styled, { css } from 'styled-components';

export const Overlay = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.modalOverlay};
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 10000;
  `}
`;

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.modalBg};
    min-width: 50rem;
    border-radius: ${theme.borderRadius.default};
    box-shadow: ${theme.boxShadow.default};
  `}
`;
