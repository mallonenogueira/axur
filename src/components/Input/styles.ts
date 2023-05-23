import styled from 'styled-components';

export const Label = styled.label`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 1.4rem;
`;

export const Input = styled.input`
  border-radius: 0.4rem;
  border: 1px solid black;
  padding: 0.5rem 1rem;

  :focus {
    border-color: #ff5824;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;

  :focus-within ${Label} {
    color: #ff5824;
  }
`;
