import React from "react";
import "./globals.css"
import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link"
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Mi App",
  description: "Layout base de ejemplo para Next.js (app router)",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="es">
      <body>
        <header>
          <Navbar/>
        </header>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
