import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import Main from "@/components/main";

const mono = localFont({
  src: "../font/sfmono.woff2",
  variable: "--mono",
});

const plain = localFont({
  src: [
    {
      path: "../font/plain/regular.woff2",
      weight: "normal",
    },
    {
      path: "../font/plain/mid.woff2",
      weight: "400",
    },
    {
      path: "../font/plain/bold.woff2",
      weight: "bold",
    },
  ],
  variable: "--plain",
});

export const metadata: Metadata = {
  title: "Paurush Sinha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mono.className} antialiased`}>
        <Header />
        <Main>{children}</Main>
      </body>
    </html>
  );
}
