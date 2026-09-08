interface ItemProps {
  children?: React.ReactNode;
}
export function Item({ children }: ItemProps) {
  return (
    <li className="flex flex-row items-center gap-2">
      <div className="m-1 h-[22px] w-[22px] shrink-0 rounded-full bg-primary-400 outline outline-dotted outline-offset-2"/>
      {children}
    </li>
  );
}
