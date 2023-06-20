import { ActionFunctionArgs, defer } from 'react-router-dom';

import { webInspectionService } from '../../services/web-inspection-service';

export async function action({ request }: ActionFunctionArgs) {
  const formDataEntries = Object.fromEntries(await request.formData());

  try {
    if (typeof formDataEntries.keyword === 'string') {
      await webInspectionService.create({
        keyword: formDataEntries.keyword
      });
    }

    return { ok: true };
  } catch (error) {
    return {
      error: 'Ocorreu um erro ao cadastrar a solicitação'
    };
  }
}

export async function loader() {
  return defer({
    data: await webInspectionService.list()
  });
}
