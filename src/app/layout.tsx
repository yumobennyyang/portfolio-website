import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Transition from "./template";

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
        <Transition>
          {children}
        </Transition>
      </body>


    </html>

  );
}
