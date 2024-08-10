import { Fredoka } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const fredoka = Fredoka({ subsets: ["hebrew"] });

export const metadata = {
  title: "Maghreb Code | Custom Web & Mobile App Solutions",
  description: "Maghreb Code delivers tailored websites and mobile apps to solve your digital challenges. Transform your business with innovative solutions today!",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`,),
  keywords: ["custom web development", "mobile app development", "digital solutions", "innovative technology", "business transformation", "tailored web solutions", "web design services", "software development", "business solutions", "app development services", "technology solutions", "web development Morocco", "custom software solutions", "digital transformation services"],
  openGraph: {
    title: "Maghreb Code | Custom Web & Mobile App Solutions",
    description: "Maghreb Code delivers tailored websites and mobile apps to solve your digital challenges. Transform your business with innovative solutions today!",
    url:`${process.env.NEXT_PUBLIC_BASE_URL}`,
    siteName: "Maghreb Code",
    images: [
      {
        url: `/opengraph-image.jpg`,
        secureUrl: `/opengraph-image.jpg`,
        width: 1200,
        height: 630,
        alt: `Maghreb Code | Custom Web & Mobile App Solutions`,
      }
    ],
    type: "website",
   
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fredoka.className} bg-[#303030] scrollbar flex flex-col justify-between scrollbar-thumb-[#b3d12f]`}  >
        <Navbar/>
          <main className=" ">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
