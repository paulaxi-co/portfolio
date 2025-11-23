"use client"
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { BUTTON_HEIGHT, Item } from "./item";
import { animate, spring } from "animejs";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Item {
  id: string;
  label: string;
  href: string;
}

export const items = [
  {
    id: 'home',
    label: 'Home',
    href: '/'
  },
  {
    id: 'about',
    label: 'About',
    href: '/about'
  },
  {
    id: 'projects',
    label: 'Projects',
    href: '/#projects'
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '#contact'
  },
]


interface NavbarProps {
  selected: string;
  onChange: (newItem: string) => void;
  className?: string;
}
export function Navbar({ selected, onChange, className }: NavbarProps) {

  const layoutRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);
  const squareRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const index = useMemo(() => {
    const foundIndex = items.findIndex(item => item.id === selected);
    if (foundIndex === -1) return 0;
    return foundIndex;

  }, [selected]);

  useLayoutEffect(() => {
    const layout = layoutRef.current;
    if (!layout) return;

    const rect = layout.getBoundingClientRect();
    setWidth((rect.width - 64) / items.length);
  }, []);

  useEffect(() => {

    const square = squareRef.current;
    if (!square) return;

    animate(square, {
      translateX: index * width + 32,
      ease: spring({ bounce: .2, duration: 700 })
    });

  }, [index, width]);

  const handleClick = (item: Item) => {
    onChange(item.id);
    router.push(item.href);
  }

  return (
    <div className={twMerge("sm:flex justify-between items-center w-full max-w-[1200px] hidden", className)}>
      <Image width={100} src="/paula_sign.svg" alt="Paula handsign" height={50} />
      <div ref={layoutRef} style={{ height: BUTTON_HEIGHT + 32 }} className={"bg-primary-400 w-full max-w-[800] py-[11] rounded-full relative flex flex-row items-center"}>
        <div style={{ height: BUTTON_HEIGHT }} className="relative w-full">
          <div ref={squareRef} style={{ height: BUTTON_HEIGHT, width }} className="absolute px-4">
            <div className="w-full h-full rounded-full bg-white" />
          </div>
          <div className="flex flex-row w-full h-full px-[32] items-center absolute">
            {items.map(item => (
              <Item onClick={() => handleClick(item)} key={item.id} label={item.label} isSelected={selected === item.id} />
            ))}
          </div>
        </div>
      </div>
      <div className="w-[100px]" />
    </div>
  );
}
