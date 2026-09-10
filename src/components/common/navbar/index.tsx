"use client"
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { BUTTON_HEIGHT, Item } from "./item";
import { animate, spring } from "animejs";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

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
    href: '/project'
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '#contact'
  },
]

function calculateIndex(selected : string) {
    const foundIndex = items.findIndex(item => item.id === selected);
    if (foundIndex === -1) return 2; // Default index is the project position
    return foundIndex;
}


interface NavbarProps {
  selected: string;
  onChange?: (newItem: string) => void;
  className?: string;
}
export function Navbar({ selected, onChange, className }: NavbarProps) {

  const layoutRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const squareRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const index = useMemo(() => calculateIndex(selected), [selected])

  useEffect(() => {
    setIsMenuOpen(false);
  }, [selected]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  useLayoutEffect(() => {
    const layout = layoutRef.current;
    if (!layout) return;

    const updateWidth = () => {
      const rect = layout.getBoundingClientRect();
      setWidth((rect.width - 64) / items.length);
    };

    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(layout);

    return () => observer.disconnect();
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
    onChange?.(item.id);
    setIsMenuOpen(false);
    router.push(item.href);
  }

  return (
    <header className={twMerge("w-full max-w-[1200px] px-4", className)}>
      <div className="relative flex h-[64px] items-center justify-between rounded-full border border-primary-400 bg-white/90 px-4 shadow-[0_8px_30px_rgba(23,23,23,0.08)] backdrop-blur-xl md:border-0 md:bg-transparent md:px-0 md:shadow-none md:backdrop-blur-none">
        <Link href="/" aria-label="Go to home" onClick={() => setIsMenuOpen(false)} className="shrink-0">
          <Image width={100} src="/paula_sign.svg" alt="Paula Mantilla" height={50} className="hidden h-[50px] w-[100px] md:block" />
          <Image width={46} src="/paula_sign_short.svg" alt="Paula Mantilla" height={46} className="h-[42px] w-[42px] md:hidden" />
        </Link>

        <div ref={layoutRef} style={{ height: BUTTON_HEIGHT + 16 }} className="relative hidden w-full max-w-[800px] flex-row items-center rounded-full bg-primary-400 py-[8px] md:flex">
          <div style={{ height: BUTTON_HEIGHT }} className="relative w-full">
            <div ref={squareRef} style={{ height: BUTTON_HEIGHT, width }} className="absolute px-4">
              <div className="h-full w-full rounded-full bg-white" />
            </div>
            <div className="absolute flex h-full w-full flex-row items-center px-[32px]">
              {items.map(item => (
                <Item onClick={() => handleClick(item)} key={item.id} label={item.label} isSelected={selected === item.id} />
              ))}
            </div>
          </div>
        </div>
        <div className="hidden w-[100px] md:block" />

        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen(open => !open)}
          className="grid h-11 w-11 place-items-center rounded-full bg-primary-400 text-[#171717] md:hidden"
        >
          <span className="sr-only">Menu</span>
          <span className="relative block h-[18px] w-[22px]">
            <span className={twMerge("absolute left-0 top-0 h-0.5 w-full rounded bg-current transition", isMenuOpen && "top-2 rotate-45")} />
            <span className={twMerge("absolute left-0 top-2 h-0.5 w-full rounded bg-current transition", isMenuOpen && "opacity-0")} />
            <span className={twMerge("absolute left-0 top-4 h-0.5 w-full rounded bg-current transition", isMenuOpen && "top-2 -rotate-45")} />
          </span>
        </button>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Primary navigation"
        className={twMerge(
          "mt-2 grid overflow-hidden rounded-[24px] border border-primary-400 bg-white/95 px-2 shadow-xl backdrop-blur-xl transition-[grid-template-rows,opacity] duration-300 md:hidden",
          isMenuOpen ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0"
        )}
      >
        <ul className="min-h-0 overflow-hidden py-2">
          {items.map(item => (
            <li key={item.id}>
              <button
                type="button"
                tabIndex={isMenuOpen ? 0 : -1}
                onClick={() => handleClick(item)}
                className={twMerge(
                  "flex min-h-12 w-full items-center justify-between rounded-2xl px-4 text-left text-lg transition hover:bg-primary-400/60",
                  selected === item.id && "bg-primary-400 font-bold"
                )}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
