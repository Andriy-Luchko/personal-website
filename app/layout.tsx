import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";

// static meta data for SEO
// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export const metadata: Metadata = {
  title: "Andriy Luchko Portfolio",
  description: "Andriy Luchko Portfolio",
};

// root layout wraps all pages (children)
// https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-950">
        <Header />
        {children}
      </body>
    </html>
  );
}
