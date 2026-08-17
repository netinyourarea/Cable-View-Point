export const SITE_NAME = "Cable View Point";
export const SITE_DOMAIN = "cableviewpoint.com";
export const SITE_URL = `https://${SITE_DOMAIN}`;
export const CONTACT_EMAIL = `hello@${SITE_DOMAIN}`;

export function canonicalUrl(path = "/") {
  const normalizedPath = path === "/" ? "/" : `/${path.replace(/^\/|\/$/g, "")}`;
  return `${SITE_URL}${normalizedPath}`;
}

export function pageSchema(pathname: string) {
  const url = canonicalUrl(pathname);
  const crumbs = pathname
    .split("/")
    .filter(Boolean)
    .map((part, index, parts) => ({
      "@type": "ListItem",
      position: index + 2,
      name: part
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
      item: canonicalUrl(parts.slice(0, index + 1).join("/")),
    }));

  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      email: CONTACT_EMAIL,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-888-478-9166",
        contactType: "customer support",
        areaServed: "US",
        availableLanguage: "English",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/learning-center?search={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: SITE_NAME,
      url: SITE_URL,
      image: `${SITE_URL}/logo.png`,
      telephone: "+1-888-478-9166",
      email: CONTACT_EMAIL,
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      priceRange: "$",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        ...crumbs,
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: SITE_NAME,
      url,
      isPartOf: {
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
      },
    },
  ];
}
