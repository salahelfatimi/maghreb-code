import { Fredoka } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const fredoka = Fredoka({ subsets: ["hebrew"] });

export const metadata = {
  title: "maghreb digital",
  description: "We are a study group at OFPPT and have worked as freelancers on various projects. We have the experience to build websites,create logos , and handle web marketing. We just build Maghreb Digital Company in 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fredoka.className} bg-[#303030] scrollbar scrollbar-thumb-[#b3d12f]`}  >
        <Navbar/>
          <main className=" pt-16">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
