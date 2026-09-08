"use client"

import { useMemo } from "react";
import { Contact } from "../contact";
import { items, Navbar } from "../navbar";
import { Footer } from "../footer";
import { usePathname } from "next/navigation";

interface CommonLayoutProps {
  children?: React.ReactNode;
}
export function CommonLayout({ children }: CommonLayoutProps) {
  const pathname = usePathname();

  const tab = useMemo(() => {
    const foundItem = items.find(item => pathname === item.href)
    if (foundItem) {
      return foundItem.id
    } else {
      return "projects" // We return projects by default since all the unhandled routed should belong to existing projects
    }

  }, [pathname]);

  return (
    <div className="flex min-h-screen w-full flex-col items-center gap-8 overflow-x-clip pt-[104px] pb-8 md:pt-[154px]">
      <Navbar className="fixed top-3 left-1/2 z-50 -translate-x-1/2 md:top-[50px]" selected={tab} />
      {children}
      <Contact />
      <Footer />
    </div>
  );
}
