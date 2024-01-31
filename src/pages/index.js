import { getNextStaticProps } from '@faustjs/next';
import React from 'react';
import { client } from 'client';
import { PageIdType } from '@faustjs/core/client'

import TemplateSwitch from './TemplateSwitch';

export default function Page() {
  const { usePage } = client;
  const page = usePage({ id: 'landing', idType: PageIdType.URI });

  return <TemplateSwitch page={page} />;
}

export async function getStaticProps(context) {
  return getNextStaticProps(context, {
    Page,
    client,
  });
}

