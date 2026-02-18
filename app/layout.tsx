import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "SKINSTRIC",
  description: "A.I. tailored skin needs",
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
