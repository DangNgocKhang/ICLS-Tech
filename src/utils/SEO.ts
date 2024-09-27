import { Metadata } from "next";

interface SeoProps {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  author?: string;
  language?: string;
}
interface SeoArticleProps extends SeoProps {
  publishedTime: string;
  modifiedTime: string;
}

interface SeoWebsiteProps extends SeoProps {
  keywords: string[];
  twitterHandle: string;
}

export function generateMetadataArticle({
  title,
  description,
  url,
  imageUrl,
  author = "ICLS TECH",
  publishedTime = "2024-01-11T11:35:00+07:00",
  modifiedTime = "2024-01-11T11:35:00+07:00",
  language = "vi_VN",
}: SeoArticleProps): Metadata {
  return {
    metadataBase: new URL("https://iclstech.edu.vn"),
    title,
    description,
    authors: [{ name: author, url: "https://iclstech.edu.vn" }],
    openGraph: {
      type: "article",
      locale: language,
      url,
      title,
      description,
      siteName: author,
      images: [
        {
          url: imageUrl,
          alt: title,
          width: 1200,
          height: 630,
        },
      ],
      publishedTime,
      modifiedTime,
    },
    twitter: {
      card: "summary_large_image",
      site: "@iclstech",
      creator: "@iclstech",
      title,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
    },
    viewport: {
      width: "device-width",
      initialScale: 1,
    },
  };
}

export function generateMetadataWebsite({
  title,
  description,
  url,
  keywords,
  imageUrl,
  twitterHandle,
}: SeoWebsiteProps): Metadata {
  return {
    metadataBase: new URL("https://iclstech.edu.vn"),
    title,
    description,
    keywords,
    openGraph: {
      url,
      type: "website",
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: twitterHandle,
      site: twitterHandle,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    alternates: {
      canonical: url,
    },
  };
}
