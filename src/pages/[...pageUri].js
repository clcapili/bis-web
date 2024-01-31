import { getNextStaticProps, is404 } from '@faustjs/next';
import { client } from 'client';

import TemplateSwitch from './TemplateSwitch';

export default function Page() {
  const { usePage } = client;
  const page = usePage();

  return <TemplateSwitch page={page} />;
}

export async function getStaticProps(context) {
  return getNextStaticProps(context, {
    Page,
    client,
    notFound: await is404(context, { client }),
  });
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}
