import Document, { Head, Main, NextScript } from "next/document";

 export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>Lim Store</title>
          <meta name="author" content={"king name"} />
          <link href="/static/styles.css" rel={"stylesheet"} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
``;