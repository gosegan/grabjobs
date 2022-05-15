export const createDefaultSeo = (siteName, description) => ({
  defaultTitle: siteName,
  titleTemplate: `%s | ${siteName}`,
  description,
  openGraph: {
    type: 'website',
    locale: 'en',
    site_name: siteName,
    titleTemplate: `%s | ${siteName}`,
    description,
  },
});
