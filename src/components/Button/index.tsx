import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

type ButtonProps = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'type' | 'onClick' | 'children'
>;

/**
 * Primary UI component for user interaction
 */
export const Button = (props: ButtonProps) => {
  return <S.Wrapper type="button" {...props} />;
};
