import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Drug & Alcohol Detox and Rehab Treatment Centers | Tru Dallas Detox",
  description:
    "Tru Dallas Detox is committed to improving the lives of individuals who are struggling with mental health and Addiction.",
  openGraph: {
    type: "website",
    title: "Drug & Alcohol Detox and Rehab Treatment Centers",
    description:
      "Tru Dallas Detox is committed to improving the lives of individuals who are struggling with mental health and addiction.",
    images: ["/images/hero/tdd-hero-desktop.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${montserrat.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
