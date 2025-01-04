import localFont from "next/font/local";
import "./globals.css";
import RecentActivity from "@/components/Dashboard/RecentActivity";
import Navbar from "@/components/Dashboard/Navbar";
import Home from "./page";
import SidebarMenu from "@/components/shared/SidebarMenu";
import NavMenu from "@/components/shared/NavMenu";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Admin Dashboard",
  description: "Analyses organizations business activities",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        {/* <RecentActivity/> */}
        {/* <Navbar/> */}
        <NavMenu/>
        <div className="flex gap-7">
        <SidebarMenu/>
        {children}
        </div>
        {/* <Home/> */}
        {/* <Navbar>{children}</Navbar> */}
      </body>
    </html>
  );
}
