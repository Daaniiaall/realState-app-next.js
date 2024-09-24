import { yekanBakh } from "@/utils/fonts";
import "./globals.css";
import Layout from "@/layout/Layout";
import NextAuthProvider from "@/providers/NextAuthProvider";

export const metadata = {
  title: " خرید و فروش املاک",
  description: "پروژه خرید و فروش املاک",
  icons: { icon: "./favicon/favicon.ico"}
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekanBakh.className}>
        <NextAuthProvider>
          <Layout>{children}</Layout>
        </NextAuthProvider>
      </body>
    </html>
  );
}
