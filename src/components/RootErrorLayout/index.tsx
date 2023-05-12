import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

import { RootLayout } from '../Layout';

function Error() {
  const error = useRouteError();

  if (isRouteErrorResponse(error) && error.status === 404) {
    return <div>Página não encontrada :(</div>;
  }

  return <div>Algo de errado aconteceu</div>;
}

export function RootErrorLayout() {
  return (
    <RootLayout>
      <Error />
    </RootLayout>
  );
}
