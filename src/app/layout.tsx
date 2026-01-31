import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Transition from "./template";
import Background from "../components/Background";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { NavigationProvider } from "../components/NavigationContext";
import SmoothScrolling from "../components/SmoothScrolling";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Benny Yang",
  description: "Benny Yang's portfolio website",
  openGraph: {
    images: [],
  },
  twitter: {
    images: [],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">


      <body className={inter.className} suppressHydrationWarning>
        <NavigationProvider>
          <SmoothScrolling>
            <Background />
            <Transition>
              {children}
            </Transition>
            <Footer />
            <Navigation />
          </SmoothScrolling>
        </NavigationProvider>
      </body>


    </html>

  );
}
