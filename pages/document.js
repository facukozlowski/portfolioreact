import { Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <title>My portfolio</title>
        <meta
          name="description"
          content="Facundo Kozlowski portfolio website"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
