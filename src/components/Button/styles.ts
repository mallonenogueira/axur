import styled, { DefaultTheme, css } from 'styled-components';

export type ButtonProps = {
  primary?: boolean;
};

const modifiers = {
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.texts.primary};

    :focus {
      border-color: ${theme.colors.primaryLight};
    }
  `
};

export const Wrapper = styled.button<ButtonProps>`
  ${({ primary, theme }) => css`
    font-weight: ${theme.font.weight.normal};
    font-size: ${theme.font.size.medium};
    border: 0;
    border-radius: ${theme.borderRadius.default};
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    text-align: center;
    padding: 1.2rem 2.4rem;
    background: ${theme.colors.secondary};
    color: ${theme.colors.texts.default};
    border: 1px solid transparent;

    :focus {
      border-color: ${theme.colors.primary};
      opacity: 0.9;
    }

    :hover {
      opacity: 0.9;
    }

    ${primary && modifiers.primary(theme)}
  `}
`;
