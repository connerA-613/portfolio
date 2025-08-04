'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import "./globals.css";
import React, { useState } from "react";

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
