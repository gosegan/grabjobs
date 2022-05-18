//styles
import 'styles/globals.css';
//lib
import { DefaultSeo } from 'next-seo';
import { createDefaultSeo } from 'lib/utils/create-default-seo';
//nextbar
import NextNProgress from 'nextjs-progressbar';

const defaultSeo = createDefaultSeo('GrabJobs', 'Search your new work');

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...defaultSeo} />
      <NextNProgress
        color="#F02BE1"
        height={3}
        options={{ easing: 'ease', speed: 300, showSpinner: false }}
      />
      <div className="min-w-[375px] overflow-hidden">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
