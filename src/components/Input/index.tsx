import { InputHTMLAttributes, forwardRef } from 'react';

import * as S from './styles';

type InputProps = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, ...props }: InputProps, ref) => {
    return (
      <S.Wrapper>
        {label && <S.Label htmlFor={id}>{label}</S.Label>}

        <S.Input ref={ref} id={id} {...props} />
      </S.Wrapper>
    );
  }
);
