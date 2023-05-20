import { Suspense } from 'react';
import { Await, defer, useLoaderData } from 'react-router-dom';

import { Button } from '../../../../components/Button';
import {
  ListCrawlsResponse,
  webInspectionService
} from '../../services/web-inspection-service';

import * as S from './styles';

export function Component() {
  const response = useLoaderData();

  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <h1>Solicitações</h1>

        <Button>Nova solicitação</Button>
      </S.TitleWrapper>

      <Suspense fallback={'Carregando'}>
        <Await resolve={response}>
          {({ data }: { data: ListCrawlsResponse[] }) => (
            <ul>
              {data.map(craw => (
                <li key={craw.id}>
                  <a>{craw.keyword}</a>
                </li>
              ))}
            </ul>
          )}
        </Await>
      </Suspense>
    </S.Wrapper>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  return defer({
    data: await webInspectionService.list()
  });
}
