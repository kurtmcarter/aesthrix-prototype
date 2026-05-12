import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aesthrix — Patient Experience",
  description: "Aesthrix patient app prototype by Cloudsoft Labs",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
