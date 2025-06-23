import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Aída y Víctor",
  description: "11/10/2025",
  icons: [{ rel: "icon", url: "/A+V.png" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} bg-slate-100`}>
      <body className="bg-[url('/images/background.png')] bg-repeat bg-center min-h-screen font-nova text-text">
        <Toaster />
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
