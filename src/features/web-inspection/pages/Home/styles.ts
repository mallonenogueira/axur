import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
  color: ${theme.colors.texts.default};

    ul {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      list-style: none;
    }

    a {
      font-size: ${theme.font.size.medium};
      color: ${theme.colors.texts.default};

      padding: 14px 20px;
      box-shadow: ${theme.boxShadow.default};
      border-radius: ${theme.borderRadius.default}
      cursor: pointer;
      position: relative;
      display: flex;
      text-decoration: none;

      ::before {
        content: ' ';
        width: 0.8rem;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        background: ${theme.colors.primary};
        border-radius: ${theme.borderRadius.default} 0px 0px
          ${theme.borderRadius.default};
      }
    }
  `}
`;

export const TitleWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    padding-bottom: 5rem;

    h1 {
      color: ${theme.colors.texts.default};
      font-size: ${theme.font.size.large};
      font-weight: ${theme.font.weight.bold};
    }
  `}
`;
