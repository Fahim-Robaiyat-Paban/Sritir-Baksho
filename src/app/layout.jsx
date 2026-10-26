import { Atma, Baloo_Da_2, Hind_Siliguri } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrapbookBackground from "@/components/layout/ScrapbookBackground";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import { siteUrl } from "@/api/site";
import "./globals.css";

const baloo = Baloo_Da_2({ variable: "--font-baloo", subsets: ["bengali", "latin"], weight: ["600", "700", "800"] });
const hind = Hind_Siliguri({ variable: "--font-hind", subsets: ["bengali", "latin"], weight: ["400", "500", "600", "700"] });
const atma = Atma({ variable: "--font-atma", subsets: ["bengali", "latin"], weight: ["500", "600"] });

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "স্মৃতির বাক্স · শৈশবের খেলা, গল্প আর পরিচয়পত্র", template: "%s · স্মৃতির বাক্স" },
  description: "৮০, ৯০ আর ২০০০-এর দশকে বড় হওয়া বাংলাদেশিদের নস্টালজিয়া কমিউনিটি। নিজের শৈশব পরিচয়পত্র বানান, হারানো খেলা আর গল্প খুঁজুন।",
  openGraph: { siteName: "স্মৃতির বাক্স", locale: "bn_BD", type: "website" },
  alternates: { canonical: "/" },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="bn" className={`${baloo.variable} ${hind.variable} ${atma.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <ScrapbookBackground />
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
};

export default RootLayout;
