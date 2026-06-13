import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CustomCursor from "@/components/CustomCursor/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  themeColor: "#0a0a0f",
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
    default: "Nuclipp — Premium Freelance Creative Services | Video Editing, Graphic Design & Development",
    template: "%s | Nuclipp",
  },
  description:
    "Nuclipp is a premium freelance creative network offering expert video editing for YouTube automation, graphic design (posters, packaging, cards), and custom web & software development. 5+ years of proven results.",
  keywords: [
    "freelance video editing",
    "youtube automation editing",
    "graphic design services",
    "poster design",
    "packaging design",
    "business card design",
    "web development",
    "freelance developer",
    "creative services",
    "Nuclipp",
  ],
  authors: [{ name: "Nuclipp" }],
  creator: "Nuclipp",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nuclipp.com",
    siteName: "Nuclipp",
    title: "Nuclipp — Premium Freelance Creative Services",
    description:
      "Expert video editing, graphic design, and development services. 5+ years of proven results with YouTube automation, design, and custom software.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuclipp — Premium Freelance Creative Services",
    description:
      "Expert video editing, graphic design, and development services. 5+ years of proven results.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable}`}>
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
