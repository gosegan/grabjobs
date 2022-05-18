//components
import { Layout } from 'components/common';
import { Title } from 'components/ui';
//lib
import { createSeo } from 'lib/utils/create-seo';

export default function Projects() {
  const SEO = createSeo('Projects');
  return (
    <Layout seo={SEO}>
      <Title className="mb-10">Projects</Title>
    </Layout>
  );
}
