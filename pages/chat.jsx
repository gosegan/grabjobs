//components
import { Layout } from 'components/common';
import { Title } from 'components/ui';
//lib
import { createSeo } from 'lib/utils/create-seo';

export default function Chat() {
  const SEO = createSeo('Chat');
  return (
    <Layout seo={SEO}>
      <Title className="mb-10">Chat</Title>
    </Layout>
  );
}
