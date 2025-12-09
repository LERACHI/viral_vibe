import { Helmet } from "react-helmet-async";
import type { Article } from "@/data/articles";

interface ArticleJsonLdProps {
  article: Article;
  url: string;
}

export const ArticleJsonLd = ({ article, url }: ArticleJsonLdProps) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: article.imageUrl,
    author: {
      "@type": "Person",
      name: article.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "ViralNow",
      logo: {
        "@type": "ImageObject",
        url: `${window.location.origin}/favicon.ico`,
      },
    },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    keywords: article.tags.join(", "),
    articleSection: article.category,
    wordCount: article.content.split(/\s+/).length,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: window.location.origin,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: article.category,
        item: `${window.location.origin}/#${article.categoryColor}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: url,
      },
    ],
  };

  return (
    <Helmet>
      <title>{article.title} | ViralNow</title>
      <meta name="description" content={article.excerpt} />
      <meta name="keywords" content={article.tags.join(", ")} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={article.title} />
      <meta property="og:description" content={article.excerpt} />
      <meta property="og:image" content={article.imageUrl} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="ViralNow" />
      <meta property="article:published_time" content={article.publishedAt} />
      <meta property="article:modified_time" content={article.updatedAt} />
      <meta property="article:author" content={article.author.name} />
      <meta property="article:section" content={article.category} />
      {article.tags.map((tag) => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={article.title} />
      <meta name="twitter:description" content={article.excerpt} />
      <meta name="twitter:image" content={article.imageUrl} />
      
      {/* JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
    </Helmet>
  );
};
