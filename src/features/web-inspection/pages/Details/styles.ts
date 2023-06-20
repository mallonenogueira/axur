import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.texts.default};
  `}
`;

export const TitleWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    padding-bottom: 5rem;
    color: ${theme.colors.texts.default};
    font-size: ${theme.font.size.large};
    font-weight: ${theme.font.weight.bold};

    h1,
    a {
      text-decoration: none;
      color: ${theme.colors.texts.default};
      font-size: ${theme.font.size.large};
      font-weight: ${theme.font.weight.bold};
    }

    small {
      font-size: ${theme.font.size.medium};
      font-weight: ${theme.font.weight.medium};
    }
  `}
`;
