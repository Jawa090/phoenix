import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { BASE_URL } from "@/lib/constants";

interface SEOData {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  robots?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}

interface SEOHeadProps {
  defaultTitle?: string;
  defaultDescription?: string;
  defaultImage?: string;
}

export function SEOHead({ defaultTitle, defaultDescription, defaultImage }: SEOHeadProps) {
  const location = useLocation();
  const [seoData, setSeoData] = useState<Record<string, SEOData>>({});

  useEffect(() => {
    fetch("/api/seo")
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data === "object") {
          setSeoData(data);
        }
      })
      .catch((error) => {
        console.error("Failed to load SEO data:", error);
      });
  }, [location.pathname]); // Reload when path changes

  // Normalize path - ensure trailing slash for consistency
  const currentPath = location.pathname === "/" ? "/" : location.pathname.endsWith("/") ? location.pathname : `${location.pathname}/`;
  const pageSEO = seoData[currentPath] || seoData[location.pathname] || {};

  const title = pageSEO.title || defaultTitle || "Phoenix Estimating";
  const description = pageSEO.description || defaultDescription || "Phoenix's #1 construction estimating firm";
  const keywords = pageSEO.keywords || "";
  const canonical = pageSEO.canonical || `${BASE_URL}${location.pathname === "/" ? "" : location.pathname}`;
  const robots = pageSEO.robots || "index, follow";
  const ogTitle = pageSEO.ogTitle || title;
  const ogDescription = pageSEO.ogDescription || description;
  const ogImage = pageSEO.ogImage || defaultImage || `${BASE_URL}/logo.png`;
  const ogUrl = pageSEO.ogUrl || canonical;
  const twitterCard = pageSEO.twitterCard || "summary_large_image";
  const twitterTitle = pageSEO.twitterTitle || ogTitle;
  const twitterDescription = pageSEO.twitterDescription || ogDescription;
  const twitterImage = pageSEO.twitterImage || ogImage;

  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      {twitterImage && <meta name="twitter:image" content={twitterImage} />}
    </Helmet>
  );
}

