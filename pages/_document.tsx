import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet as styledServerStyleSheet } from 'styled-components';
import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@material-ui/core/styles';

export default class MyDocument extends Document {
  // SECTION default SSR setup for styled-components
  static async getInitialProps(ctx: DocumentContext) {
    const styledSheet = new styledServerStyleSheet();
    const materialUiSheets = new MaterialUiServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            styledSheet.collectStyles(
              materialUiSheets.collect(<App {...props} />)
            ),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {materialUiSheets.getStyleElement()}
            {styledSheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      styledSheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
