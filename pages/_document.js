import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <noscript>JavaScript is off. Please enable to view full site.</noscript>
        <Head crossOrigin={""} nonce={""}>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript  crossOrigin={""} nonce={""}/>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
