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
      urbanist.variable,
      className,
      'leading-[40px] text-[32px] sm:text-[60px] my-0 font-[600]',
      center && 'text-center'

    )}>{children}</h1>
  );

})
Title.displayName = "Title";

export { Title };
