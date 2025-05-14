import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { createGetInitialProps, createStylesServer, ServerStyles } from '@mantine/next';
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';

const stylesServer = createStylesServer();
const getInitialProps = createGetInitialProps();

class DocumentApp extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <ServerStyles html={initialProps.html} server={stylesServer} key="styles" />
        </>
      ),
    };
  }

  render() {
    return (
      <Html lang="en" {...mantineHtmlProps}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Oswald:wght@200..700&display=swap"
            crossOrigin="anonymous"
            as="font"
          />
          <ColorSchemeScript />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default DocumentApp;
