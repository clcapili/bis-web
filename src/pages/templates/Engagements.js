import { client } from 'client';
import {
  Header,
  Footer,
  Main,
  SEOYoast,
  Hero,
  PageColumnCopy,
  FeaturedMediaRow
} from 'components';

export default function Engagements({ page }) {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;
  const pageData = page?.template.$on.Template_Engagements.engagements;

  return (
    <>
      <SEOYoast
        site={generalSettings}
        post={page}
      />

      <Header />

        <Main>

            <Hero title={pageData?.hero?.title} description={pageData?.hero?.description} staticImage={pageData?.hero?.staticImage} image={pageData?.hero?.image} link={pageData?.hero?.link} />

            <PageColumnCopy title={pageData?.pageColumnCopy.title} texts={pageData?.pageColumnCopy.texts} />

            <FeaturedMediaRow title={pageData?.featuredMedia.title} mediaImages={pageData?.featuredMedia.images} />

            <PageColumnCopy title={pageData?.pageColumnCopy2.title} texts={pageData?.pageColumnCopy2.texts} />
            
        </Main>

      <Footer />
    </>
  );
}