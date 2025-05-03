import type { Metadata } from "next";
import { Poppins, Roboto, Inter, Lexend_Deca, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/Footer";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const lexend = Lexend_Deca({
  variable: "--font-lexend",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
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
        className={`${poppins.variable} ${lexend.variable} ${roboto.variable} ${inter.variable} ${dmSans.variable}`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        <Navbar />
        <div className="min-h-screen">
        {children}
        </div>
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
