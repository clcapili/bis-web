import { client } from 'client';
import {
  Header,
  Footer,
  Main,
  SEOYoast,
  PageHeader,
  MediaObjectRow
} from 'components';

export default function Glossary({ page }) {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;
  const pageData = page?.template.$on.Template_Glossary.glossary;

  return (
    <>
      <SEOYoast
        site={generalSettings}
        post={page}
      />

      <Header />

      <Main>

          <PageHeader title={page?.title()} />
               
          <MediaObjectRow mediaObjects={pageData?.mediaObjects.mediaObjects} />

      </Main>

      <Footer />
    </>
  );
}