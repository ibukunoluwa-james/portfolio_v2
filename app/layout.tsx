import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "James Ibukunoluwa — Full-Stack Developer & Designer",
  description:
    "I craft elegant digital experiences that blend beautiful design with powerful functionality.",
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
