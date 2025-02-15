import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shrek Routing App",
  description: "A Next.js app featuring Shrek-themed routing.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow flex items-center justify-center p-8 bg-shrekGreen w-3/4 mx-auto">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
