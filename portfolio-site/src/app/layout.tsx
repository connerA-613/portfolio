'use client';

import { Query, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React, { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
      <body
        className="bg-background-dark text-gray-900"
      >
        {children}
      </body>
      </QueryClientProvider>
    </html>
  );
}
