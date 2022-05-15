export const createSeo = (title, description) => ({
  title,
  description,
  openGraph: {
    description,
  },
});
