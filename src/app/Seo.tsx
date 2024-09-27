import Head from "next/head";

interface SeoProps {
  title: string;
  description: string;
  keywords: string;
  url: string;
  image: string;
  typeJsonSchema: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  language?: string;
}

const Seo = ({
  title,
  description,
  keywords,
  url,
  image,
  typeJsonSchema,
  author = "ICLS TECH",
  publishedTime = "2024-01-11T11:35:00+07:00",
  modifiedTime = "2024-01-11T11:35:00+07:00",
  language = "vi_VN",
}: SeoProps) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": { typeJsonSchema },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    headline: title,
    description,
    image,
    dateCreated: publishedTime,
    datePublished: publishedTime,
    dateModified: modifiedTime,
    author: {
      "@type": "Organization",
      name: author,
      url: "https://iclstech.edu.vn",
    },
    publisher: {
      "@type": "Organization",
      name: author,
      logo: {
        "@type": "ImageObject",
        url: "/logoICLS.png",
      },
    },
    inLanguage: language,
    isFamilyFriendly: "true",
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta property="og:site_name" content="ICLS TECH" />
      <meta
        property="og:locale"
        content={language === "vi-VN" ? "vi_VN" : "en_US"}
      />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="article:published_time" content={publishedTime} />
      <meta property="article:modified_time" content={modifiedTime} />
      <meta property="article:author" content="https://iclstech.edu.vn" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@iclstech" />
      <meta name="twitter:creator" content="@iclstech" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
};

export default Seo;
