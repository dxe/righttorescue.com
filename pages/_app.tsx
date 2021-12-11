import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import "../styles/template.css"; // TODO: clean up styles
import type { AppProps } from "next/app";
import { useEffect } from "react";
import SSRProvider from "react-bootstrap/SSRProvider";
import Head from "next/head";
import { MainNav } from "../components/MainNav";
import { Support } from "../components/Support";
import { Footer } from "../components/Footer";

// TODO: maybe don't declare the page layout here since it's also used for things like the 404 page?
// or maybe just update the 404 page to have a dark background?

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
        <link rel="icon" type="image/png" href="img/favicon.png" />
        <title>Right to Rescue</title>
        <script
          src={`https://www.googletagmanager.com/gtag/js?id=${GTM_CONFIG}`}
          defer
        />
        <script
          id="gtm"
          defer
          dangerouslySetInnerHTML={{
            __html: `
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
          `,
          }}
        />
        {/*TODO: add font awesome (ensure it works for petition share buttons too) */}
        <link
          href="https://fonts.googleapis.com/css?family=Varela+Round"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
          rel="stylesheet"
        />
      </Head>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_CONFIG}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      <MainNav />
      <Component {...pageProps} />
      <Support />
      <Footer />
    </SSRProvider>
  );
}

export default MyApp;
