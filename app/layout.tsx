import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "David Oluwasegun Bilewumi — Administrative Professional",
  description: "Administrative Assistant specializing in high-accuracy data entry and top-tier customer service. Based in Port Harcourt, Nigeria.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
