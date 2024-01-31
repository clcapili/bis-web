import { client } from 'client';
import {
  Header,
  Footer,
  Main,
  SEOYoast,
  PageHeader,
  PageExcerpt,
  ComponentRow,
  FeaturedImage
} from 'components';

export default function Model({ page }) {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;
  const pageData = page?.template.$on.Template_Model.model;

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
        
        <div className="container">
          <div className="row">
            <div className="col">
              <FeaturedImage image={page?.featuredImage?.node} />
            </div>
          </div>
        </div>
        
        <ComponentRow title={pageData?.components.title} description={pageData?.components.description} components={pageData?.components.components} subComponents={pageData?.components.components.subComponents} />
       
      </Main>

      <Footer />
    </>
  );
}