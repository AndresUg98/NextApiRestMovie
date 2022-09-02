import Document, { Html, Head, Main, NextScript } from "next/document";
import styles from "../GlobalStyle/GlobalStyle.scss";
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className={styles.body}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
