import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] }); // ✅ Ensure `inter` is correctly assigned

export const metadata = {
  title: "Shrek Routing App",
  description: "A Next.js app featuring Shrek-themed routing.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}> {/* ✅ Using inter correctly */}
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
