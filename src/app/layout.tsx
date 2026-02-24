import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Drug & Alcohol Detox and Rehab Treatment Centers | Amity Palm Beach",
  description:
    "Amity Palm Beach is committed to improving the lives of individuals who are struggling with mental health and Addiction.",
  openGraph: {
    type: "website",
    title: "Drug & Alcohol Detox and Rehab Treatment Centers",
    description:
      "Amity Palm Beach is committed to improving the lives of individuals who are struggling with mental health and addiction.",
    images: ["/images/hero/amity-2-desktop.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
