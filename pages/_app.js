import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head"; // Import the Head component

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <ThemeProvider>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
};

export default App;