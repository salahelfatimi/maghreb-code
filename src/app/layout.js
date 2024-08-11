import { Fredoka } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { GoogleAnalytics } from '@next/third-parties/google'
const fredoka = Fredoka({ subsets: ["hebrew"] });

export const metadata = {
  title: "Maghreb Code | Custom Website Development",
  description: "Maghreb Code creates high-quality, custom websites with innovative digital solutions to elevate your business. Based in Marrakech, Morocco.",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`,),
  keywords: ["custom websites", "web development", "digital solutions", "innovative web design", "business website", "Marrakech web services", "Morocco web development", "branding design", "web marketing", "SEO services", "high-quality websites", "business transformation"],
  openGraph: {
    title: "Maghreb Code | Custom Website Development",
    description: "Maghreb Code creates high-quality, custom websites with innovative digital solutions to elevate your business. Based in Marrakech, Morocco.",
    url:`${process.env.NEXT_PUBLIC_BASE_URL}`,
    siteName: "Maghreb Code",
    images: [
      {
        url: `/opengraph-image.jpg`,
        secureUrl: `/opengraph-image.jpg`,
        width: 1200,
        height: 630,
        alt: `Maghreb Code | Custom Website Development`,
      }
    ],
    type: "website",
   
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
          <meta property="og:url" content={`https://www.maghrebcode.com`}/>
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_MEASUREMENT_ID}/>
        </head>
      <body className={`${fredoka.className} bg-[#303030] select-none scrollbar flex flex-col justify-between scrollbar-thumb-[#b3d12f]`}  >
        <Navbar/>
          <main className=" ">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
