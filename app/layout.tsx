import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aesthrix — Patient Experience Prototype",
  description: "AI-powered patient experience platform for aesthetic clinics. Prototype by Cloudsoft Labs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
