import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Open_Sans } from 'next/font/google'

import "./globals.css";
import { FireNavigationBar } from "./components/fireNavigationBar/fireNavigationBar";
import { FireFooter } from "./components/fireFooter/fireFooter";

const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menuItems = [
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about' },
    { label: 'Services', link: '/services' },
    { label: 'Products', link: '/products' },
    { label: 'Contact', link: '/contact' }
  ]
  const socialMediaMenuItems = [
    { alt: 'Facebook', link: 'https://www.facebook.com', src: '/assets/youtube.svg' },
    { alt: 'LinkedIn', link: 'https://www.linkedin.com', src: '/assets/youtube.svg' },
    { alt: 'Instagram', link: 'https://www.instagram.com', src: '/assets/youtube.svg' },
    { alt: 'YouTube', link: 'https://www.youtube.com', src: '/assets/youtube.svg' },
    { alt: 'Twitter', link: 'https://www.twitter.com', src: '/assets/youtube.svg' }
  ]
  return (
    <html lang="en" className={openSans.className}>
      <body className='flex justify-center items-center bg-background'>
        <div className="w-2/3">
          <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-2/3">
            <FireNavigationBar
              menuItems={menuItems}
            />
          </div>
          {children}
          <FireFooter />
        </div>
      </body>
    </html>
  );
}
