import { getNextStaticProps } from '@faustjs/next';
import { client } from 'client';
import {
  Header,
  PageHeader,
  Footer,
  Main,
  SEO,
} from 'components';
import { is404Cpt } from 'utils';

export function LeadershipComponent({ leadership }) {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;
  // console.log(leadership.leade)
  return (
    <>
      <SEO
        title={`${leadership?.title()} - ${generalSettings?.title}`}
        imageUrl={leadership?.featuredImage?.node?.sourceUrl?.()}
      />

      <Header />

      <Main>
        <PageHeader title={leadership?.title()} />
        
        <div className="container">
          <p>{ leadership?.title() }</p>
          <p>{ leadership.leadershipMeta.title }</p>
          <p>{ leadership.leadershipMeta.linkedIn.url }</p>
          <p>{ leadership.leadershipMeta.linkedIn.title }</p>
          <p>{ leadership.leadershipMeta.linkedIn.target }</p>
          {/* <ContentWrapper content={leadership?.contentArea} /> */}
        </div>
      </Main>

      <Footer />
    </>
  );
}

export default function Page({ id }) {
  const { useQuery } = client;
  const leadership = useQuery().leadership({
    id,
    idType: 'SLUG',
  });

  return <LeadershipComponent leadership={leadership} />;
}

export async function getStaticProps(context) {
  const leadershipSlug = context?.params?.leadershipSlug;

  return getNextStaticProps(context, {
    Page,
    client,
    props: {
      id: leadershipSlug,
    },
    notFound: await is404Cpt(leadershipSlug, 'leadership'),
  });
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}
