import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import FacebookPixel from "@/components/Track/FacebookPixel";
import GoogleAnalytics from "@/components/Track/GoogleAnalytics";
import { siteConfig } from "../config/site";
import { ToastProvider } from "@/components/shared/toast/ToastContext";
import { WebSocketProvider } from "./context/WebSocketContext";
import { Toaster } from "@/components/dashboard/shared/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
  },
  description: siteConfig.description,
  image: "/logo.png",
  url: siteConfig.url,
  type: "website",
  siteName: siteConfig.name,
  date: "2024-06-23",
  keywords: [
    "meseji",
    "whatsappapi",
    "whatsapp",
    "sms",
    "marketing",
    "email",
    "chatbot",
  ],

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "@meseji",
    creator: "@mesejiOfficial",
    title: siteConfig.title,
    description: siteConfig.description,
    image: "/og-image.jpeg",
  },

  manifest: `${siteConfig.url}/manifest.json`,
  alternates: {
    canonical: siteConfig.url,
  },
};

const FACEBOOK_PIXEL_ID = "1873337013093110"; // Replace with your Facebook Pixel ID
const GOOGLE_ANALYTICS_ID = "G-G512R7ZLXZ"; // Replace with your Google Analytics ID

export default async function RootLayout({ children }) {

  return (
    <html lang="en" >
      <head>
        {process.env.ENV === "PROD" && (
          <>
            <GoogleAnalytics trackingId={GOOGLE_ANALYTICS_ID} />
            <FacebookPixel pixelId={FACEBOOK_PIXEL_ID} />
          </>
        )}
      </head>
      <body className={inter.className}>
        <StoreProvider>
          <WebSocketProvider>
            <ToastProvider>
                {children}
            </ToastProvider>
            <Toaster />
          </WebSocketProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
