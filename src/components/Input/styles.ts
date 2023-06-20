import styled, { css } from 'styled-components';

export const Label = styled.label`
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.normal};
    font-size: ${theme.font.size.small};
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    border-radius: ${theme.borderRadius.default};
    border: 1px solid ${theme.colors.input};
    padding: 1rem 0.5rem;

    :focus {
      border-color: ${theme.colors.primary};
    }
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;

    :focus-within ${Label} {
      color: ${theme.colors.primary};
    }
  `}
`;
