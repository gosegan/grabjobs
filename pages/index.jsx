//components
import { Layout } from 'components/common';
//lib
import { createSeo } from 'lib/utils/create-seo';

export default function Home() {
  const SEO = createSeo('Home');
  return (
    <Layout seo={SEO}>
      <div className="grid min-h-screen items-center justify-center">
        <h1 className="text-4xl font-bold">happy hacking 🌚 🤝 🌝</h1>
      </div>
    </Layout>
  );
}
