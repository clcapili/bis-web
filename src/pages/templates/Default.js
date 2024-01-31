import { client } from 'client';
import {
  Header,
  PageHeader,
  ContentWrapper,
  Footer,
  Main,
  SEO,
} from 'components';
import { pageTitle } from 'utils';

export default function Default({ page }) {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;

  return (
    <>
      <SEO
        title={pageTitle(
          generalSettings,
          page?.title(),
          generalSettings?.title
        )}
        imageUrl={page?.featuredImage?.node?.sourceUrl?.()}
      />

      <Header />

      <Main>
        <PageHeader title={page?.title()} />
        <div className="container">
          <ContentWrapper content={page?.content()} />
        </div>
      </Main>

      <Footer />
    </>
  );
}
