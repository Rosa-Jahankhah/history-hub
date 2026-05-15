import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "She'erit Hapletah · Yiddish 103",
    template: "%s | She'erit Hapletah",
  },
  description:
    "A Yiddish 103 final project on Jewish Displaced Persons in postwar Europe. Dedicated to the innocent lives lost in the Holocaust.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white font-sans text-slate-900">
        <SiteHeader />
        <div className="sticky top-[82px] z-20 border-b border-slate-300 bg-slate-800 px-6 py-3">
          <p className="text-center text-sm font-medium leading-snug text-slate-100">
            Dedicated to the innocent men, women, and children who lost their lives in the Holocaust.{" "}
            <span className="text-slate-300">
              Special thanks to Professor{" "}
              <span className="font-bold text-white">Miriam Borden</span>.
            </span>
          </p>
        </div>
        {children}
      </body>
    </html>
  );
}
