/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from 'react-router-dom';

interface Data {
  name: string;
}

export const Component = () => {
  const data = useLoaderData() as Data;

  return <>{data.name}</>;
};
export async function loader() {
  return { name: 'Mallone' };
}
