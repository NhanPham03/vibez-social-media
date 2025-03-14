import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ConfigProvider } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vibez",
  description: "Social media for the creative",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <ConfigProvider
        theme={{
          token: {

          },
      }}>
        <AntdRegistry>
          <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
              {children}
            </body>
          </html>
        </AntdRegistry>
      </ConfigProvider>
    </ClerkProvider>
  );
}
