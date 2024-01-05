'use client'

import Script from "next/script";
import * as gtag from "../../gtag.js";

const GoogleAnalytics = () => {
    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=G-N6EX2Q9C3T`}
            />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', 'G-N6EX2Q9C3T', {
                      page_path: window.location.pathname,
                      });
                    `,
                }}
            />
        </>
    )
}

export default GoogleAnalytics