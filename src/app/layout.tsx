import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "thai"] });

export const metadata: Metadata = {
  title: "Morning · Work-OS",
  description: "Enterprise Work OS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="dark">
      <body className={`${inter.className} min-h-screen antialiased selection:bg-[#d4ff00] selection:text-black`}>
        {children}
      </body>
    </html>
  );
}
