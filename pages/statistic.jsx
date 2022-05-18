//components
import { Layout } from 'components/common';
import { Title } from 'components/ui';
//lib
import { createSeo } from 'lib/utils/create-seo';

export default function Statistic() {
  const SEO = createSeo('Statistic');
  return (
    <Layout seo={SEO}>
      <Title className="mb-10">Statistic</Title>
    </Layout>
  );
}
