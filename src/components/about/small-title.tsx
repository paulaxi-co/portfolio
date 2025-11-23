import { Urbanist } from "next/font/google";
import { twMerge } from "tailwind-merge";

const urbanist = Urbanist({
  weight: '600'

})

interface SmallTitleProps {
  children?: React.ReactNode;
  className?: string;
}
export function SmallTitle({ children, className }: SmallTitleProps) {
  return (
    <h2 className={twMerge(urbanist.className,'font-[600] text-[40px]', className)}>{children}</h2>
  );
}
