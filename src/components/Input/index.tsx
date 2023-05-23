import { InputHTMLAttributes } from 'react';

import * as S from './styles';

type InputProps = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ id, label, ...props }: InputProps) => {
  return (
    <S.Wrapper>
      {label && <S.Label htmlFor={id}>{label}</S.Label>}

      <S.Input id={id} {...props} />
    </S.Wrapper>
  );
};
