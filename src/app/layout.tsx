import type { Metadata } from "next";
import "../styles/index.css";

export const metadata: Metadata = {
  title: "Know shayaz",
  description: "Full Stack Developer & Designer Portfolio",
   icons: {
    icon: "/icon.jpg", // or /favicon.ico
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
