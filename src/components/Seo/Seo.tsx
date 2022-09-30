import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";

interface SeoProps {
  title?: string;
  description?: string;
  pathname: string;
  image?: string;
}

interface SiteMetadata {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      author: string;
      image: string;
      siteUrl: string;
      siteLanguage: string;
      ogLanguage: string;
    };
  };
}

const Seo: React.FC<SeoProps> = ({ title, description, pathname, image }) => {
  const data: SiteMetadata = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            title
            description
            author
            image
            siteLanguage
            ogLanguage
          }
        }
      }
    `,
  );

  const siteData = data.site.siteMetadata;

  return (
    <Helmet title={title || siteData.title}>
      <html lang={siteData.siteLanguage} />
      <meta name="description" content={description || siteData.description} />
      <meta
        name="image"
        content={image || `https://www.placeholder.com/${siteData.image}`}
      />
      <meta property="og:site_name" content={siteData.title} />
      <meta property="og:title" content={title || siteData.title} />
      <meta
        property="og:description"
        content={description || siteData.description}
      />
      <meta
        property="og:image"
        content={image || `https://www.placeholder.com/${siteData.image}`}
      />
      <meta
        property="og:image:secure_url"
        content={image || `https://www.placeholder.com/${siteData.image}`}
      />
      <meta property="og:image:alt" content="fire" />
      <meta property="og:image:type" content="image/jpg" />
      <meta
        property="og:url"
        content={pathname ? `${siteData.siteUrl}${pathname}` : siteData.siteUrl}
      />
      <meta property="og:locale" content={siteData.ogLanguage} />
      <meta property="og:type" content="website" />
      <meta name="twitter:site" content={siteData.author} />
      <meta name="twitter:creator" content={siteData.author} />
      <meta name="twitter:title" content={title || siteData.title} />
      <meta
        name="twitter:description"
        content={description || siteData.description}
      />
      <meta
        name="twitter:image"
        content={image || `https://www.placeholder.com/${siteData.image}`}
      />
      <meta name="twitter:image:alt" content="fire" />
      <meta name="twitter:card" content="summary" />
    </Helmet>
  );
};

export default Seo;
