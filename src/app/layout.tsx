import "~/styles/globals.css";

import { type Metadata } from "next";
import { Montserrat, Merriweather } from "next/font/google"

const MainFont = Montserrat({
  subsets: ['latin'],
  variable: "--font-montserrat",
})

const AddFont = Merriweather({
  subsets:["latin"],
  weight:["300", "400", "700", "900"],
  variable:"--font-merriweather"
})

import { Toaster } from "~/components/ui/sonner";
import TRPCReactProvider from "~/trpc/trpc_react_provider";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${MainFont.variable}  ${AddFont.variable} no-scrollbar`}>
      <body className="bg-background overflow-x-hidden ">
        <TRPCReactProvider>
          {children}
          <Toaster richColors />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
