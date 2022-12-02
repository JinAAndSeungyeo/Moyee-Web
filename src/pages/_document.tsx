import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document'
import { fontPaths, fontFamilies } from 'styles/fonts';
export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel='shortcut icon'
            type='image/ico'
            as='favicon'
            href='/icons/favicon/favicon.ico'
          />

          <link
            rel='preload'
            type='font/woff2'
            as='font'
            href={fontPaths.pretendard.REGULAR}
            crossOrigin=''
          />

          <link
            rel='preload'
            type='font/woff2'
            as='font'
            href={fontPaths.pretendard.MEDIUM}
            crossOrigin=''
          />

          <link
            rel='preload'
            type='font/woff2'
            as='font'
            href={fontPaths.pretendard.SEMI_BOLD}
            crossOrigin=''
          />

          <link
            rel='preload'
            type='font/woff2'
            as='font'
            href={fontPaths.pretendard.BOLD}
            crossOrigin=''
          />

          <link
            rel='preload'
            type='font/woff2'
            as='font'
            href={fontPaths.pretendard.EXTRA_BOLD}
            crossOrigin=''
          />

          <style
            dangerouslySetInnerHTML={{
              __html: fontFamilies,
            }}
          ></style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}