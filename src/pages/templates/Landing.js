import { client } from 'client';
import {
  Header,
  Footer,
  Main,
  SEOYoast,
  CardRow,
  Hero,
  PageCopy,
  CTA,
  FeaturedMediaRow
} from 'components';
import { handleResize } from 'utils';
import { useEffect } from 'react';

export default function Landing({ page }) {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;
  const pageData = page?.template.$on.Template_Landing.landingPage;
    
  useEffect(() => {
    handleResize();
    
    window.addEventListener('resize', () => handleResize());
  }, []);

  return (
    <>
      <SEOYoast
        site={generalSettings}
        post={page}
      />

      <Header />

      <Main>
         
            <Hero title={pageData?.hero?.title} description={pageData?.hero?.description} staticImage={pageData?.hero?.staticImage} image={pageData?.hero?.image} link={pageData?.hero?.link} />

            <PageCopy title={pageData?.pageCopy.title} description={pageData?.pageCopy.description} />
        
            <CardRow title={pageData?.cards.title} cards={pageData?.cards.cards} />
            
            <CTA title={pageData?.cta?.title} description={pageData?.cta?.description} image={pageData?.cta?.image} link={pageData?.cta?.link} />

            <CardRow title={pageData?.cards2?.title} cards={pageData?.cards2?.cards} />

            <FeaturedMediaRow title={pageData?.featuredMedia?.title} mediaImages={pageData?.featuredMedia?.images} />
          
      </Main>

      <Footer />
    </>
  );
}
