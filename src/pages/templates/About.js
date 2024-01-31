import { client } from 'client';
import {
  Header,
  Footer,
  Main,
  SEOYoast,
  PageHeader,
  PageExcerpt,
  MediaObjectRow
} from 'components';

export default function About({ page }) {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;
  const pageData = page?.template.$on.Template_About.pageAbout;

  return (
    <>
      <SEOYoast
        site={generalSettings}
        post={page}
      />

      <Header />

      <Main>
        
        <PageHeader title={page?.title()} />

        <PageExcerpt excerpt={page?.excerpt()} />
        
        <MediaObjectRow mediaObjects={pageData?.mediaObjects.mediaObjects} />

      </Main>

      <Footer />
    </>
  );
}