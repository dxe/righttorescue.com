import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import "../styles/template.css"; // TODO: clean up styles
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import SSRProvider from "react-bootstrap/SSRProvider";
import Head from "next/head";
import Layout from "../components/Layout";
import Script from "next/script";
import { DonateModal } from "../components/DonateModal";
import { isAfter, isBefore, parseISO } from "date-fns";
import * as AdReferralService from "../services/AdReferralService";

const GTM_CONFIG = "GTM-NCX3NJC";

const DONATE_MODAL_START_DATE = parseISO("2022-05-24T15:00:00Z");
const DONATE_MODAL_END_DATE = parseISO("2022-05-31T17:00:00Z");

function MyApp({ Component, pageProps }: AppProps) {
  const [isDonateModalOpen, setDonateModalOpen] = useState(false);

  useEffect(() => {
    AdReferralService.onAppInit(window);
  }, []);

  // Show donate modal between start & end date.
  useEffect(() => {
    const now = new Date();
    if (
      isAfter(now, DONATE_MODAL_START_DATE) &&
      isBefore(now, DONATE_MODAL_END_DATE)
    ) {
      setTimeout(() => {
        setDonateModalOpen(true);
      }, 3000);
    }
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        {/* Google Tag Manager part 1 of 2 */}
        <script id="google-tag-manager">
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
        </script>
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

      {/* Google Tag Manager part 2 of 2*/}
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
        <DonateModal
          isOpen={isDonateModalOpen}
          onClose={() => setDonateModalOpen(false)}
        />
      </Layout>
    </>
  );
}

export default MyApp;
