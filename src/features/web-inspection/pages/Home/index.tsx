/* eslint-disable react-refresh/only-export-components */
import { Suspense, useEffect, useState } from 'react';
import {
  Await,
  useLoaderData,
  useActionData,
  Link,
  useRevalidator
} from 'react-router-dom';

import { Button } from '../../../../components/Button';
import { NewInspectionFormModal } from '../../components/NewInspectionFormModal';
import { ListCrawlsResponse } from '../../services/web-inspection-service';

import * as S from './styles';

export * from './actions';

type ActionProp =
  | {
      ok?: boolean;
      error?: string;
    }
  | undefined;

export function Component() {
  const [showModal, setShowModal] = useState(false);
  const response = useLoaderData();
  const { revalidate } = useRevalidator();
  const actionData = useActionData() as ActionProp;

  useEffect(() => {
    if (actionData?.ok) {
      setShowModal(false);
    }
  }, [actionData, revalidate]);

  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <h1>Solicitações</h1>

        <Button primary onClick={() => setShowModal(true)}>
          Nova solicitação
        </Button>
      </S.TitleWrapper>

      <Suspense fallback="Carregando">
        <Await resolve={response}>
          {({ data }: { data: ListCrawlsResponse[] }) => (
            <ul>
              {data.map(craw => (
                <li key={craw.id}>
                  <Link to={`/detalhes/${craw.id}`}>{craw.keyword}</Link>
                </li>
              ))}
            </ul>
          )}
        </Await>
      </Suspense>

      <NewInspectionFormModal
        error={actionData?.error}
        visible={showModal}
        onClose={() => setShowModal(false)}
      />
    </S.Wrapper>
  );
}
