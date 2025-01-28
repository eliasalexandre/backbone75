import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import { ContactDrawerProvider } from "@/context/contact-drawer-context";

import "./globals.css";

// Font files can be colocated inside of `app`
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Backbone Angola",
  description: "Criação de websites e aplicações web em angola",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.className} antialiased`}>
        <ContactDrawerProvider>{children}</ContactDrawerProvider>
      </body>
    </html>
  );
}
