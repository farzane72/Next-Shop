import type { Metadata } from "next";
import MainLayout from "@/app/(main)/components/layout/main-layout/MainLayout";
import { yekan } from "@/utils/fonts";
import  "@/tailwind/globals.css"
import Providers from "@/redux/Providers";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="fa" dir="rtl">
        <body className={yekan.className} suppressHydrationWarning={true}>
          <Providers><MainLayout>{children}</MainLayout></Providers>
        </body>
      </html>
    </>
  )
}
