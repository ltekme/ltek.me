import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ltek.me",
  description: "Personal website of karlcch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`select-none`}>{children}</body>
    </html>
  );
}
