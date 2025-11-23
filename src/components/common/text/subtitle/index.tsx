import { Carlito } from "next/font/google";
import { twMerge } from "tailwind-merge";

const carlito = Carlito({
  weight: '400'
})

export interface SubtitleProps {
  className?: string;
  children?: React.ReactNode;
}
export function Subtitle({ className, children }: SubtitleProps) {
  return (
    <h2 className={twMerge('font-[400] text-3xl', className, carlito.className)}>
      {children}
    </h2>
  );
}
