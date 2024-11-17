import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Boki Boki",
  description: "Asian street food",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {/* <main className={"flex justify-center flex-col w-full max-w-5xl m-2"}>
          <div className="flex flex-col gap-1 my-2">
            <hr className="border-[0.5px] border-black w-full" />
            <hr className="border-[0.5px] border-black w-full" />
            <hr className="border-[0.5px] border-black w-full" />
          </div>
          <Header /> */}
        {children}
        {/* <Footer />
          <div className=" flex flex-col gap-1 my-2">
            <hr className="border-[0.5px] border-black w-full" />
            <hr className="border-[0.5px] border-black w-full" />
            <hr className="border-[0.5px] border-black w-full" />
          </div>
        </main> */}
      </body>
    </html>
  );
}
