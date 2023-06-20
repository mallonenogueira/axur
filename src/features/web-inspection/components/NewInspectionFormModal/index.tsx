import { useEffect, useState } from 'react';
import { Form } from 'react-router-dom';

import { Input } from '../../../../components/Input';
import { Modal } from '../../../../components/Modal';

import * as S from './styles';
import { Button } from '../../../../components/Button';

export type NewInspectionFormModalProps = {
  visible: boolean;
  onClose: () => void;
  error?: string;
};

export const NewInspectionFormModal = ({
  onClose,
  visible,
  error
}: NewInspectionFormModalProps) => {
  const [text, setText] = useState('');

  useEffect(() => {
    if (!visible) {
      setText('');
    }
  }, [visible]);

  return (
    <Modal visible={visible} onClose={onClose}>
      <S.Wrapper>
        <Form method="POST">
          <Input
            ref={ref => ref?.focus()}
            label="Textos da nova solicitação"
            id="keyword"
            name="keyword"
            value={text}
            onChange={event => setText(event.target.value)}
          />

          {error && <p>{error}</p>}

          <S.Actions>
            <Button onClick={onClose}>Cancelar</Button>

            <Button type="submit" primary>
              Salvar
            </Button>
          </S.Actions>
        </Form>
      </S.Wrapper>
    </Modal>
  );
};
