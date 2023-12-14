import "@/styles/index.css";

export const metadata = {
  title: "Next Template",
  description: "Next tepmlate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/favicon.png" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
