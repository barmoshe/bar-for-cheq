import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const title = "Bar Moshe, for CHEQ";
const description =
  "An AI Engineer application to CHEQ, in their own brand. I build AI products, idea to production. By Bar Moshe.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://bar-for-cheq.vercel.app"),
  robots: { index: false, follow: true },
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://bar-for-cheq.vercel.app",
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-ink text-fg">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-pink focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
