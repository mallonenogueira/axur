import styled, { css } from 'styled-components';

export type ButtonProps = {
  primary?: boolean;
};

const modifiers = {
  primary: () => css`
    background: #ff5824;
    color: #fff;

    :focus {
      border-color: #fff824;
    }
  `
};

export const Wrapper = styled.button<ButtonProps>`
  ${({ primary }) => css`
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    border: 0;
    border-radius: 0.4rem;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    text-align: center;
    padding: 1.2rem 2.4rem;
    background: #f5f5f5;
    color: #333;
    border: 1px solid transparent;

    :focus {
      border-color: #ff5824;
      opacity: 0.9;
    }

    :hover {
      opacity: 0.9;
    }

    ${primary && modifiers.primary()}
  `}
`;
