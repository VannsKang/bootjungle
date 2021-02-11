import Head from 'next/head';
import { useEffect } from 'react';
import { NextLayout } from '@/template';
import { Provider } from 'react-redux';

// LINK styles
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { GlobalStyle, theme, muiTheme } from '@/common/theme';

// LINK components
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import store from '@/store';

const Layout: NextLayout = ({ children }) => {
  // NOTE to remove the server-side generated CSS
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles);
  }, []);

  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
        <meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={muiTheme}>
          <Provider store={store}>
            <Navbar />
            {children}
            <Footer />
          </Provider>
        </MuiThemeProvider>
      </ThemeProvider>
    </>
  );
};

export default Layout;
