import { Urbanist } from "next/font/google";
import { twMerge } from "tailwind-merge";

const urbanist = Urbanist({
  weight: ['400', '500', '600']
})

export interface SubtitleProps {
  className?: string;
  children?: React.ReactNode;
}
export function Subtitle({ className, children }: SubtitleProps) {
  return (
    <h2 className={twMerge('font-normal text-3xl', urbanist.className, className)}>
      {children}
    </h2>
  );
}
