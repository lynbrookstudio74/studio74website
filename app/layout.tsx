import type { Metadata } from "next";
import { Domine, Inter, Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Footer from "./components/Footer";

const domine = Domine({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-domine",
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Lynbrook Drama",
    default: "Home",
  },
  description:
    "Aute consectetur eiusmod incididunt non quis irure aliquip qui ullamco commodo exercitation nostrud. Aute consectetur eiusmod incididunt non quis irure aliquip qui ullamco commodo exercitation nostrud. Aute consectetur eiusmod incididunt non quis irure aliquip qui ullamco commodo exercitation nostrud.",
  generator: "Studio 74",
  applicationName: "Lynbrook Drama",
  keywords: ["Lynbrook", "Drama", "Theatre", "Studio 74"],
  creator: "Lynbrook Drama",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`relative ${domine.variable} ${rubik.variable}`}>
        <Navbar />
        <Section>{children}</Section>
        <br />
        <Footer />
      </body>
    </html>
  );
}
