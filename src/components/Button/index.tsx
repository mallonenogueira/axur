import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

export type ButtonProps = {
  primary?: boolean;
} & Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'type' | 'onClick' | 'children'
>;

export const Button = (props: ButtonProps) => {
  return <S.Wrapper type="button" {...props} />;
};
