
import type { Metadata } from "next";
import "../styles/index.css";

const siteUrl = "https://portfolio-know-shayaz-dev.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Shayaz | Full Stack Developer & Software Engineer",
    template: "%s | Shayaz",
  },

  description:
    "I'm Shayaz, a Full Stack Developer and Software Engineer specializing in Python, Flask, FastAPI, React, Next.js, and modern web technologies.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/icon.jpg",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Shayaz | Full Stack Developer",
    description:
      "Explore Shayaz's portfolio, projects, technical skills, and experience.",
    images: ["/og-image.png"],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shayaz",
  url: siteUrl,
  jobTitle: "Full Stack Developer",
  knowsAbout: [
    "Python",
    "Flask",
    "FastAPI",
    "React",
    "Next.js",
    "Node.js",
    "Artificial Intelligence",
    "Software Engineering",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
          }}
        />

        {children}
      </body>
    </html>
  );
}
