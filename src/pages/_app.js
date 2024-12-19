import theme from "../styles/theme";
import { ThemeProvider } from "../context/themeContext";
import { useRouter } from "next/router";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  let routeName = "";

  if(router.pathname === "/"){
    routeName = '';
  } else if(router.pathname.includes('[') && router.pathname.includes(']')){
    routeName = '| Dynamic Page';
  }else{
    routeName = '| ' + router.pathname.slice(1).replace(/^\w/, (c) => c.toUpperCase());
  }

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Teamify {routeName.charAt(0).toUpperCase() + routeName.slice(1)}</title>
        <meta name="description" content={`This is the ${routeName} page`} />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}