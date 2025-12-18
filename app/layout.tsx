import type { Metadata } from "next";
import { Geist, Geist_Mono, Manufacturing_Consent, UnifrakturMaguntia, UnifrakturCook, Pirata_One, Grenze_Gotisch } from "next/font/google";
import "./globals.css";

const manufacturingConsent = Manufacturing_Consent({
  weight: "400",
  subsets: ["latin"]
})


const unifrankturMaguntia = UnifrakturMaguntia({
  weight: "400",
  subsets: ["latin"]
})

const unifrankturCook = UnifrakturCook({
  weight: "700",
  subsets: ["latin"]
})

const pirateOne = Pirata_One({
  weight: "400",
  subsets: ["latin"]
})

const grenzeGotisch = Grenze_Gotisch({
  weight: "400",
  subsets: ["latin"]
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Omar Pierce",
  description: "Music, merch, shows and more by singer Omar Pierce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${manufacturingConsent.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
