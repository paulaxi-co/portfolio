import { Urbanist } from "next/font/google";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const urbanist = Urbanist({
  variable: '--urbanist-font',
  weight: ['600']
})

interface TitleProps {
  center?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const Title = forwardRef<HTMLHeadingElement, TitleProps>(({ children, center, className }, ref) => {
  return (
    <h1 ref={ref} className={twMerge(
      className,
      'text-[clamp(2.25rem,8vw,3.75rem)] leading-[1.02] my-0 font-semibold break-words',
      center && 'text-center',
      urbanist.className,

    )}>{children}</h1>
  );

})
Title.displayName = "Title";

export { Title };
