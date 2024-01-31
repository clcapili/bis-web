import React from 'react';
import { client } from 'client';
import {
  Footer,
  Header,
  PageHeader,
  LoadMore,
  Main,
  SEO,
  Leaderships
} from 'components';
import { getNextStaticProps } from '@faustjs/next';
import { pageTitle } from 'utils';
import useNodePagination from 'hooks/useNodePagination';

/**
 * Prepass fields for project nodes. This lists all the pieces of data we need
 * for each project node. Running the following through `prepass` ensures that
 * all of the data is there when we need it, and no cascading requests happen.
 *
 * @see https://gqty.dev/docs/client/helper-functions#prepass
 */
const LEADERSHIP_NODES_PREPASS_FIELDS = [
  'id',
  'title'
];

export default function Page() {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;
  const { data, fetchMore, isLoading } = useNodePagination(
    (query, queryArgs) => query.leaderships(queryArgs),
    LEADERSHIP_NODES_PREPASS_FIELDS
  );

  const details = useQuery().leadershipArchive;

  return (
    <>
      <SEO title={pageTitle(generalSettings)} />

      <Header />

      <Main>
        <PageHeader title="Latest Leadership" />
        <div className="container">
          {details.leadershipArchive.description}
          <Leaderships leaderships={data?.nodes} id="leadership-list" />
          <LoadMore
            className="text-center"
            hasNextPage={data?.hasNextPage}
            endCursor={data?.endCursor}
            isLoading={isLoading}
            fetchMore={fetchMore}
          />
        </div>
      </Main>

      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
  return getNextStaticProps(context, {
    Page,
    client,
  });
}
