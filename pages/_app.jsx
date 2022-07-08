import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Header from '../src/components/header/Header';
import GlobalStyle from '../src/styles/globals';
import theme from '../src/styles/theme';
import '../src/styles/container.css';
import '../src/styles/typography.css';

export default function App({ Component, pageProps }){
    return(
        <>
            <Head>
                <title>GenIS</title>
            </Head>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Header />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}