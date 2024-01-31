import Head from 'next/head';

/**
 * Provide SEO related meta tags to a page.
 *
 * @param {Props} props The props object.
 * @param {string} props.seo Object of yoast seo data
 *
 * @returns {React.ReactElement} The SEO component
 */
export default function SEOYoast({ site, post }) {

  let imageUrl = post?.featuredImage?.node?.sourceUrl?.();
  let url = site && post ? site.url + post.uri : undefined;

  return (
    <>
      <Head>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary_large_image" />

        {site && site.title && (
          <>
            <meta property="og:site_name" content={site.title} />
          </>
        )}

        {post && post.modified && (
          <>
            <meta property="article:modified_time" content={post.modified} />
          </>
        )}

        {post && post.seo && post.seo.title && (
          <>
            <title>{post.seo.title}</title>
            <meta name="title" content={post.seo.title} />
            <meta property="og:title" content={post.seo.title} />
            <meta property="twitter:title" content={post.seo.title} />
          </>
        )}

        {post && post.seo && post.seo.metaDesc && (
          <>
            <meta name="description" content={post.seo.metaDesc} />
            <meta property="og:description" content={post.seo.metaDesc} />
            <meta property="twitter:description" content={post.seo.metaDesc} />
          </>
        )}

        {imageUrl && (
          <>
            <meta property="og:image" content={imageUrl} />
            <meta property="twitter:image" content={imageUrl} />
          </>
        )}

        {url && (
          <>
            <meta property="og:url" content={url} />
            <meta property="twitter:url" content={url} />
          </>
        )}
      </Head>
    </>
  );
}
