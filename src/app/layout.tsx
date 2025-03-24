import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "codingwithsaleem",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  manifest: "/site.webmanifest",
  keywords: [
    "codingwithsaleem",
    "coding with saleem",
    "coding solutions",
    "education",
    "web development",
    "programming",
    "services",
  ],
  description:
    "Coding with Saleem - A platform offering coding solutions, educational content, web development tutorials, programming guides, and various services.",
  authors: [
    {   
      name: "Saleem Raza",
      url: "codingwithsaleem.com",
    },
  ],
  creator: "Saleem Raza",
  publisher: "Saleem Raza",
  openGraph: {
    title: "Codingwithsaleem",
    description:
      "Coding with Saleem - A platform offering coding solutions, educational content, web development tutorials, programming guides, and various services.",
    url: "https://codingwithsaleem.com",
    siteName: "Codingwithsaleem",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Coding with Saleem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Codingwithsaleem",
    description:
      "Coding with Saleem - A platform offering coding solutions, educational content, web development tutorials, programming guides, and various services.",
    images: ["/logo-01.png"],
    creator: "@codingwithsaleem",
    site: "@codingwithsaleem",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
