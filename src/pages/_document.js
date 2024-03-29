import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" data-theme="cupcake">
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=yes, user-scalable=no, viewport-fit=cover"
      />
      <meta
        name="description"
        content="A Torrent Aggregator Site With Minimal Interface"
      />
      <meta
        name="keywords"
        content="Torrents, 1337x, The Pirate Bay, BitTorrent"
      />
      <meta name="author" content="@aru" />

      <link rel="manifest" href="/manifest.json" />
      <link
        rel="shortcut icon"
        href="/images/favicon.ico"
        type="image/x-icon"
      />

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
