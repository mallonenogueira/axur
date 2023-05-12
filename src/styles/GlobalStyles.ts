import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

const GlobalStyles = styled.createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;

    box-sizing: border-box;
  }
`;

export default GlobalStyles;
