import { createPortal } from 'react-dom';

import * as S from './styles';
import { ReactNode, useCallback, useEffect, useRef } from 'react';

const ESC_CODE = 'Escape';

interface Props {
  children: ReactNode;
  onClose: () => void;
  visible: boolean;
}

export const ModalBase = ({ children, onClose }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleBackgroundClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (ref.current !== event.target) return;

      onClose();
    },
    [onClose]
  );

  useEffect(() => {
    const fn = (event: KeyboardEvent) => {
      if (event.code === ESC_CODE) onClose();
    };

    document.addEventListener('keyup', fn);

    return () => document.removeEventListener('keyup', fn);
  }, [onClose]);

  return (
    <S.Background ref={ref} onClick={handleBackgroundClick}>
      <S.Wrapper role="alertdialog">{children}</S.Wrapper>
    </S.Background>
  );
};

export const Modal = (props: Props) => {
  const element = document.querySelector('#container-modal');

  if (!element || !props.visible) return null;

  return createPortal(<ModalBase {...props} />, element);
};
