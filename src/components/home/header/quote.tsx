import QuoteIcon from "@/components/common/icons/quote";
import { twMerge } from "tailwind-merge";

interface QuoteProps {
  className?: string;
}
export function Quote({className} : QuoteProps) {
  return (
  <div className={twMerge("flex mx-auto flex-col w-[200]", className)}>
      <QuoteIcon/>
      <p>
        Great ideas spark in the simplest moments — with Enzo, a good book, and a side of fries.
      </p>
    </div>
  );
}
