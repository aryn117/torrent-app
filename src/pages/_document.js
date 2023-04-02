import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" data-theme="cupcake">

      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=yes, user-scalable=no, viewport-fit=cover"
      />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png"></link>
        <meta name="theme-color" content="#EF9FBC" />
      <Head />
      <body>
        <Main />
        <NextScript />        
      </body>
    </Html>
  );
}
