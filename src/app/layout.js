import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Layout from "@/layout/Layout";
import UserProvider from "@/context/UserProvider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-josefin-sans",
});

export const metadata = {
  title: "FLUX | ABHAY",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={josefinSans.variable}>
      <body>
        <UserProvider>
          <Layout>{children}</Layout>
        </UserProvider>
      </body>
    </html>
  );
}
