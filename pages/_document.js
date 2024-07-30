import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Reverdece Ya! es una plataforma de observatorio y cuidado medioambiental popular." />
        <meta property="og:title" content="Reverdece Ya!" />
        <meta property="og:description" content="Reverdece Ya! es una plataforma de observatorio y cuidado medioambiental popular." />
        <meta property="og:image" content="https://www.reverdeceya.com/images/banner.jpg" />
        <meta property="og:url" content="https://www.reverdeceya.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Reverdece Ya!" />
        <meta name="twitter:description" content="Reverdece Ya! es una plataforma de observatorio y cuidado medioambiental popular." />
        <meta name="twitter:image" content="https://www.reverdeceya.com/images/banner.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
