import type { Metadata } from "next";
import { Carlito } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/modules/common/theme";
import { CommonLayout } from "@/components/common/common-layout";

const carlito = Carlito({
  weight: ['400', '700'],
  variable: '--carlito-font'
})


export const metadata: Metadata = {
  title: "Paula XI",
  description: "Next UX/UI experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${carlito.variable} antialiased`}
      >
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CommonLayout>
              {children}
            </CommonLayout>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
