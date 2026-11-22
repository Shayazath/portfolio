
import type { Metadata } from "next";
import "../styles/index.css";

const siteUrl = "https://portfolio-know-shayaz-dev.vercel.app";

const siteName = "Shayaz Portfolio";

const siteTitle =
  "Shayaz | Full Stack Developer & Software Engineer";

const siteDescription =
  "I'm Shayaz, a Full Stack Developer and Software Engineer specializing in Python, Flask, FastAPI, React, Next.js, and modern web technologies.";

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  applicationName: siteName,

  title: {
    default: siteTitle,
    template: "%s | Shayaz",
  },

  description: siteDescription,

  keywords: [
    "Shayaz",
    "Shayaz Portfolio",
    "Shayaz Developer",
    "Full Stack Developer",
    "Software Engineer",
    "Python Developer",
    "Flask Developer",
    "FastAPI Developer",
    "React Developer",
    "Next.js Developer",
    "Backend Developer",
    "AI Developer",
  ],

  authors: [
    {
      name: "Shayaz",
      url: siteUrl,
    },
  ],

  creator: "Shayaz",
  publisher: "Shayaz Portfolio",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/icon.jpg",
        type: "image/jpeg",
      },
    ],
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: siteName,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shayaz - Full Stack Developer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
  },

  category: "technology",
};

// Google WebSite Schema
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: siteName,
  alternateName: "Shayaz",
  url: `${siteUrl}/`,
  description: siteDescription,
  inLanguage: "en",
};

// Google Person Schema
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: "Shayaz",
  url: `${siteUrl}/`,
  jobTitle: "Full Stack Developer & Software Engineer",
  description: siteDescription,
  knowsAbout: [
    "Python",
    "Flask",
    "FastAPI",
    "Django",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "AWS",
    "Docker",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "Artificial Intelligence",
    "Software Engineering",
    "REST API Development",
  ],
};

// Root Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...websiteSchema,
        "@context": undefined,
      },
      {
        ...personSchema,
        "@context": undefined,
      },
    ],
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

        {children}
      </body>
    </html>
  );
}
