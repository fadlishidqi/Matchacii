import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "MATCHACII.SMG - Franchise Kemitraan Matcha Terbaik 2025",
  description: "Bergabunglah dengan MATCHACII.SMG, brand street matcha premium dengan modal terjangkau dan sistem bisnis yang terarah.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="bg-white">
      <body className={`${poppins.variable} antialiased bg-white font-poppins`}>
        <div className="max-w-md mx-auto bg-white min-h-screen relative">
          {children}
        </div>
      </body>
    </html>
  );
}