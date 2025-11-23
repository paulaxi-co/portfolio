"use client"

import { useState } from "react";
import { Contact } from "../contact";
import { items, Navbar } from "../navbar";
import { Footer } from "../footer";
import { usePathname } from "next/navigation";

interface CommonLayoutProps {
  children?: React.ReactNode;
}
export function CommonLayout({ children }: CommonLayoutProps) {
  const pathname = usePathname();
  const [tab, setTab] = useState(() => items.find(item => item.href === pathname)?.id || "");
  return (
    <div className="flex flex-col gap-8 items-center w-full sm:py-[84px]">
      <Navbar className="fixed top-[50px] left-1/2 -translate-1/2 z-10" selected={tab} onChange={setTab} />
      {children}
      <Contact />
      <Footer />
    </div>
  );
}
