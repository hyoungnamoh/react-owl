import Document, { Head, Main, NextScript } from 'next/document';

export default class RootDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" />
          <meta name="description" content="My First Static Website" />
          <meta name="keywords" content="nextjs,static,website" />
        </Head>
        <body>
          <Main />
          {process.env.NODE_ENV === 'production'
            && <script src="https://polyfill.io/v3/polyfill.min.js?features=es6,es7,es8,es9,NodeList.prototype.forEach&flags=gated" />}
          <NextScript />
        </body>
      </html>
    );
  }
}
// import Document, { DocumentContext, Head, Main, NextScript } from 'next/document'

// class MyDocument extends Document {
//   static async getInitialProps(ctx: DocumentContext) {
//     const initialProps = await Document.getInitialProps(ctx);
//     return initialProps;
//   }
//   render() {
//     <>
//     </>
//   }
// }

// export default MyDocument