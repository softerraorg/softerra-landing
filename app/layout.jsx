import "./globals.css";

export const metadata = {
  title: "Softerra — Shopify development team",
  description:
    "Softerra is an engineering team shipping custom Shopify themes, headless Next.js storefronts, and the full-stack work around them for DTC brands across the US and Europe.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Fonts loaded here so the browser fetches them immediately, in parallel
            with the bundle — avoids the late font-swap reflow on first load. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body style={{ fontFamily: "'Plus Jakarta Sans', -apple-system, system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
