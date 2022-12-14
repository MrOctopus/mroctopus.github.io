import Head from 'next/head';
import { ThemeProvider } from 'src/themes';

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
};

export default MyApp
