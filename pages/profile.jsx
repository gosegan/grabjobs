//components
import { Layout } from 'components/common';
import { Title } from 'components/ui';
//lib
import { createSeo } from 'lib/utils/create-seo';

export default function Profile() {
  const SEO = createSeo('Profile');
  return (
    <Layout seo={SEO}>
      <Title className="mb-10">Profile</Title>
    </Layout>
  );
}
