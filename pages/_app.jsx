//styles
import 'styles/globals.css';
//lib
import { DefaultSeo } from 'next-seo';
import { createDefaultSeo } from 'lib/utils/create-default-seo';

const defaultSeo = createDefaultSeo('Name', 'Description');

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...defaultSeo} />
      <div className="min-w-[375px] overflow-hidden">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
