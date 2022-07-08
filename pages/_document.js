import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content />
        <meta name="author" content />
        <title>Titis Nur Azwanti</title>
        <link rel="icon" type="image/x-icon" href="assets/img/favicon.ico" />
        {/* Font Awesome icons (free version)*/}
        {/* Google fonts*/}
        <link
          href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i"
          rel="stylesheet"
          type="text/css"
        />
        {/* Core theme CSS (includes Bootstrap)*/}
        <link href="assets/css/style.css" rel="stylesheet" />
      </Head>
      <body id="page-top">
        <Main />
        <NextScript />

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        {/* <script src="assets/js/scripts.js"></script> */}
      </body>
    </Html>
  );
}
