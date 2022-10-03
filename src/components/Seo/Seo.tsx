import { useStaticQuery, graphql } from "gatsby";

interface SeoProps {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
  noIndex?: boolean;
}

interface SiteMetadata {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      author: string;
      image: string;
      siteUrl: string;
    };
  };
}

const Seo: React.FC<SeoProps> = ({
  title,
  description,
  pathname,
  image,
  noIndex,
}) => {
  const { site }: SiteMetadata = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            title
            description
            author
            image
            siteUrl
          }
        }
      }
    `,
  );
  const siteDefault = site.siteMetadata;

  const metaTitle = title ? title : siteDefault.title;
  const metaDescription = description ? description : siteDefault.description;
  const metaImage = image ? image : siteDefault.image;
  const metaSiteUrl = pathname
    ? `${siteDefault.siteUrl}${pathname}`
    : siteDefault.siteUrl;

  return (
    <>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="image" content={metaImage} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:image:secure_url" content={metaImage} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:alt" content="react" />
      <meta property="og:url" content={metaSiteUrl} />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={siteDefault.author} />
      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:image:alt" content="react" />
      {noIndex && <meta name="robots" content="noindex" />}
    </>
  );
};

export default Seo;
