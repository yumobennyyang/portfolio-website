import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Transition from "./template";
import Background from "../components/Background";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { NavigationProvider } from "../components/NavigationContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Benny Yang",
  description: "Benny Yang's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">


      <body className={inter.className}>
        <NavigationProvider>
          <Background />
          <Transition>
            {children}
          </Transition>
          <Footer />
          <Navigation />
        </NavigationProvider>
      </body>


    </html>

  );
}
