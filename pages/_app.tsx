import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import "../styles/template.css"; // TODO: clean up styles
import type { AppProps } from "next/app";
import { useEffect } from "react";
import SSRProvider from "react-bootstrap/SSRProvider";
import Head from "next/head";
import Layout from "../components/Layout";
import Script from "next/script";

const GTM_CONFIG = "GTM-NCX3NJC";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    //@ts-ignore
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <SSRProvider>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Help the whistleblowers facing prison time for exposing factory farm abuses and rescuing suffering animals"
        />
        <meta property="og:image" content="img/og-image.png" />
        <link rel="icon" type="image/png" href="favicon.ico" />
        <title>Right to Rescue</title>
      </Head>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GTM_CONFIG}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          (function (w, d, s, l, i) {
              w[l] = w[l] || [];
              w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
              var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != "dataLayer" ? "&l=" + l : "";
              j.async = true;
              j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
              f.parentNode.insertBefore(j, f);
            })(window, document, "script", "dataLayer", "${GTM_CONFIG}");
        `}
      </Script>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_CONFIG}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  );
}

export default MyApp;
