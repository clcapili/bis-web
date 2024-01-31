import { client } from 'client';
import {
  Header,
  Footer,
  Main,
  SEOYoast,
  PageHeader,
  PageExcerpt,
  AnimatedMediaObjectRow
} from 'components';

export default function Theory({ page }) {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;
  const pageData = page?.template.$on.Template_Theory.theory;

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
        
        <AnimatedMediaObjectRow position={pageData?.animatedMediaObjects.startPosition} animatedMediaObjects={pageData?.animatedMediaObjects.animatedMediaObjects} />
       
      </Main>

      <Footer />
    </>
  );
}