import seo from '@/seo';
import { ChakraProvider } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <DefaultSeo
        title={seo.title}
        description={seo.description}
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: seo.url,
          siteName: seo.siteName,
        }}
        twitter={{
          handle: seo.twitter,
          site: seo.url,
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
