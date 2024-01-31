import { client } from 'client';
import {
  Header,
  Footer,
  Main,
  SEOYoast,
  PageHeader,
  PageExcerpt,
  MilestonesRow
} from 'components';

export default function Milestones({ page }) {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;
  const pageData = page?.template.$on.Template_Milestones.milestones;

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
            
          <MilestonesRow milestones={pageData?.milestones.milestones} />
       
      </Main>

      <Footer />
    </>
  );
}