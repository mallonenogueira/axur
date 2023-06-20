/* eslint-disable react-refresh/only-export-components */
import { Link, useLoaderData } from 'react-router-dom';
import { CrawlDataResponse } from '../../services/web-inspection-service';
import * as S from './styles';

type LoaderData = {
  data: CrawlDataResponse;
};

const STATUS = {
  active: 'Em andamento',
  done: 'Concluído'
};

export * from './actions';

export const Component = () => {
  const { data } = useLoaderData() as LoaderData;

  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <h1>
          <Link to="/">Solicitações</Link>

          {` > Detalhes: ${data.id}`}
        </h1>

        {STATUS[data.status] && <p>Status: {STATUS[data.status]}</p>}
      </S.TitleWrapper>

      {data.urls?.map(url => (
        <p key={url}>{url}</p>
      ))}

      {!data.urls.length && 'Nenhum registro encontrado'}
    </S.Wrapper>
  );
};
