import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  themeColor: "#FAFAF8",
};

export const metadata = {
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Nuclipp",
  },
  metadataBase: new URL("https://nuclipp.com"),
  title: {
    default: "Nuclipp — AI Automation Agency | Custom AI Systems for Business",
    template: "%s | Nuclipp AI",
  },
  description:
    "Nuclipp builds custom AI automation systems that save businesses 100+ hours per month. AI chatbots, lead qualification, CRM automation, and intelligent workflow solutions for startups, SMEs, and enterprises.",
  keywords: [
    "AI automation agency",
    "AI chatbot development",
    "business automation India",
    "CRM automation",
    "AI lead qualification",
    "WhatsApp automation",
    "custom AI solutions",
    "workflow automation",
    "AI consulting",
    "Nuclipp",
  ],
  authors: [{ name: "Nuclipp" }],
  creator: "Nuclipp",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://nuclipp.com",
    siteName: "Nuclipp",
    title: "Nuclipp — AI Automation Agency | Custom AI Systems for Business",
    description:
      "We build custom AI systems that automate support, qualify leads, and save your team 100+ hours every month. From chatbots to full workflow automation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuclipp — AI Automation Agency",
    description:
      "Custom AI automation systems for businesses. Chatbots, lead qualification, CRM automation, and more.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
