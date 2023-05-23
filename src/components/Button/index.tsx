import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

type ButtonProps = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'type' | 'onClick' | 'children'
>;

export const Button = (props: ButtonProps) => {
  return <S.Wrapper type="button" {...props} />;
};
