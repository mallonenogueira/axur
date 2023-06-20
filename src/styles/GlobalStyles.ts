import { createGlobalStyle, css } from 'styled-components';

const styled = { createGlobalStyle };

const GlobalStyles = styled.createGlobalStyle`
  ${({ theme }) => css`
    *,
    *:before,
    *:after {
      padding: 0;
      margin: 0;
      outline: 0;

      box-sizing: border-box;
      font-family: ${theme.font.family};
    }

    html {
      font-size: 62.5%;
    }

    body {
      font-size: 1.6rem;
    }
  `}
`;

export default GlobalStyles;
