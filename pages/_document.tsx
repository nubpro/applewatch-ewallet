import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;800&display=swap"
            rel="stylesheet"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#717171" />
          <meta name="msapplication-TileColor" content="#FFE419" />
          <meta name="theme-color" content="#ffffff" />

          <meta
            name="title"
            content="awwallet - Malaysia First e-Wallet on the Apple Watch"
          />
          <meta
            name="description"
            content="Wants to pay with your watch but you can't? Fret not, you now can."
          />

          {/*  Open Graph / Facebook  */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://awwallet.vercel.app" />
          <meta
            property="og:title"
            content="awwallet - Malaysia First e-Wallet on the Apple Watch"
          />
          <meta
            property="og:description"
            content="Wants to pay with your watch but you can't? Fret not, you now can."
          />
          <meta
            property="og:image"
            content="https://awwallet.vercel.app/meta-preview.png"
          />

          {/*  Twitter  */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://awwallet.vercel.app" />
          <meta
            property="twitter:title"
            content="awwallet - Malaysia First e-Wallet on the Apple Watch"
          />
          <meta
            property="twitter:description"
            content="Wants to pay with your watch but you can't? Fret not, you now can."
          />
          <meta
            property="twitter:image"
            content="https://awwallet.vercel.app/meta-preview.png"
          ></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
