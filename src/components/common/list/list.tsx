import { twMerge } from "tailwind-merge";

interface ListProps {
  children?: React.ReactNode;
  className?: string;
}

export function List({ children, className }: ListProps) {
  return (
    <ul className={twMerge("flex flex-col gap-4", className)}>
      {children}
    </ul>
  );
}
