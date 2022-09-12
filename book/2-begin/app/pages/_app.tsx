import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import { themeDark, themeLight } from '../lib/theme';

class MyApp extends App {
  public componentDidMount() {
    // Remove server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  public render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={false ? themeDark : themeLight}>
        <Head>
          <meta name="viewport" content="width device-width, initial-scale=1.0" />
        </Head>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>

    );
  }
}

export default MyApp;
