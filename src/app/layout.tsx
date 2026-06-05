import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meet Shah — Flutter Developer & Software Engineer",
  description:
    "Portfolio of Meet Shah — Experienced Flutter Developer specializing in cross-platform mobile apps using Flutter, Dart, Firebase, and BLoC architecture.",
  keywords: [
    "Meet Shah",
    "Flutter Developer",
    "Software Engineer",
    "Flutter",
    "Dart",
    "Firebase",
    "Mobile Developer",
    "Cross-platform",
    "BLoC",
    "Ahmedabad",
    "India",
  ],
  authors: [{ name: "Meet Shah", url: "https://meetshah.dev" }],
  creator: "Meet Shah",
  openGraph: {
    title: "Meet Shah — Flutter Developer & Software Engineer",
    description:
      "Building scalable mobile experiences with Flutter, Firebase, and modern architectures.",
    url: "https://meetshah.dev",
    siteName: "Meet Shah Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Meet Shah — Flutter Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Shah — Flutter Developer & Software Engineer",
    description:
      "Building scalable mobile experiences with Flutter, Firebase, and modern architectures.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://meetshah.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} antialiased`} style={{ background: '#050508', color: '#f8fafc' }}>
        {children}
      </body>
    </html>
  );
}
