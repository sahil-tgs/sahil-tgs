import { MantineProvider } from '@mantine/core';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>sahil-tgs</title>
        <meta name="description" content="Your portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}