import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shrek Routing App",
  description: "A sample app with routing using the app router.",
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

function Navbar() {
  return (
    <nav className="h-6 bg-shrekNavbar p-8 flex justify-center items-center gap-10 font-bold text-xl w-3/4 mx-auto shadow-sm">
      <Link href="/">Home</Link>
      <Link href="/quotes">Shrek Quotes</Link>
      <Link href="/donkey">Donkey</Link>
      <Link href="/gallery">Gallery</Link>
      <Link href="/meme">Meme</Link>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-shrekDarkGreen w-3/4 mx-auto h-10 text-white flex justify-center items-center p-10 text-center">
      <p>Shrek is voiced by the "Groovy Baby!" guy.</p>
    </footer>
  );
}
