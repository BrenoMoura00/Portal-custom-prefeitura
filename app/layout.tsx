import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import AccessibilityBar from "../components/layout/AccessibilityBar";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });

export const metadata: Metadata = {
  title: "Portal Institucional - Prefeitura",
  description: "Portal Gov 2030",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
      </head>
      <body className={`${inter.variable} ${raleway.variable} font-sans bg-[#F4F7F9] text-[#2C3E50] antialiased flex flex-col min-h-screen`}>
        <AccessibilityBar />
        
        <div id="main-nav">
          <Header />
        </div>
        
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        
        <div id="footer">
          <Footer />
        </div>
      </body>
    </html>
  );
}