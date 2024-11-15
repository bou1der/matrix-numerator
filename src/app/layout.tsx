import "~/styles/globals.css";

import { type Metadata } from "next";
import { Montserrat, Merriweather } from "next/font/google"
import { YandexMetricaProvider } from "next-yandex-metrica"


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
  title: "Soul key",
  description: "Ваш путь к самопознанию и гармонии начинается здесь",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${MainFont.variable}  ${AddFont.variable} no-scrollbar`}>
      <meta name="yandex-verification" content="1435782365ee22c6" />
      <body className="bg-background overflow-x-hidden ">
        <YandexMetricaProvider
          tagID={98942861}
          initParameters={{ clickmap: true, trackLinks: true, accurateTrackBounce: true }}
        >
          <TRPCReactProvider>
            {children}
            <Toaster richColors />
          </TRPCReactProvider>
        </YandexMetricaProvider>
      </body>
    </html>
  );
}
