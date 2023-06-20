import { LoaderFunctionArgs, defer } from 'react-router-dom';

import { webInspectionService } from '../../services/web-inspection-service';

export async function loader({ params }: LoaderFunctionArgs) {
  if (params.id) {
    return defer({
      data: await webInspectionService.find(params.id)
    });
  }
}
