import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta key="title" name="title" content="Tunion" property="og:title" />
        <meta
          key="desc"
          name="description"
          content="Tunion app"
          property="og:description"
        />
        <script
          src="https://js-cdn.music.apple.com/musickit/v3/musickit.js"
          data-web-components
          async
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
