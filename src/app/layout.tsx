'use client';

// import type { Metadata } from "next";
import { Poppins, Roboto, Inter, Lexend_Deca, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/app/store';
import DashboardLayout from "@/components/layouts/DashboardLayout";

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

// export const metadata: Metadata = {
//   title: "codingwithsaleem",
//   icons: {
//     icon: "/icon.svg",
//     shortcut: "/icon.svg",
//     apple: "/icon.svg",
//   },
//   manifest: "/site.webmanifest",
//   keywords: [
//     "codingwithsaleem",
//     "coding with saleem",
//     "coding solutions",
//     "education",
//     "web development",
//     "programming",
//     "services",
//   ],
//   description:
//     "Coding with Saleem - A platform offering coding solutions, educational content, web development tutorials, programming guides, and various services.",
//   authors: [
//     {
//       name: "Saleem Raza",
//       url: "codingwithsaleem.com",
//     },
//   ],
//   creator: "Saleem Raza",
//   publisher: "Saleem Raza",
// };

const queryClient = new QueryClient();


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
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <QueryClientProvider client={queryClient}>
            <Provider store={store}>
              <PersistGate
                loading={<div>Loading...</div>}
                persistor={persistor}
              >
                <TooltipProvider>
                  <Toaster />
                  <Sonner />
                  <DashboardLayout>
                    {children}
                  </DashboardLayout>
                </TooltipProvider>
              </PersistGate>
            </Provider>
          </QueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
