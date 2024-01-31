import { client } from 'client';
import {
  Header,
  Footer,
  Main,
  SEOYoast,
  Hero,
  PageCopy,
  SlideshowTextCard,
  CardRow,
  PageVideo,
  PageColumnCopy,
  BookCTA
} from 'components';
import { handleResize } from 'utils';
import { useEffect } from 'react';

export default function Book({ page }) {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;
  const pageData = page?.template.$on.Template_Book.book;

  useEffect(() => {
    setTimeout(() => handleResize(), 1000);
    
    window.addEventListener('load resize orientationchange', () => handleResize());
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
            
            <PageCopy title={pageData?.pageCopy?.title} description={pageData?.pageCopy?.description} />

            <SlideshowTextCard title={pageData?.slideshowText.title} slideshowTextCards={pageData?.slideshowText.slides} />

            <CardRow title={pageData?.cards.title} cards={pageData?.cards.cards} videoLightbox={pageData?.cards.videoLightbox} />

            <PageVideo title={pageData?.pageVideo.title} video={pageData?.pageVideo.video} />

            <PageColumnCopy title={pageData?.pageColumnCopy.title} texts={pageData?.pageColumnCopy.texts} />

            <CardRow title={pageData?.cards2.title} cards={pageData?.cards2.cards} videoLightbox={pageData?.cards2.videoLightbox} />

            <BookCTA title={pageData?.bookCta?.title} description={pageData?.bookCta?.description} image={pageData?.bookCta?.image} pretitle={pageData?.bookCta?.pretitle} logos={pageData?.bookCta?.logos} />
       
      </Main>

      <Footer />
    </>
  );
}