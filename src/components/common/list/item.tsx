interface ItemProps {
  children?: React.ReactNode;
}
export function Item({ children }: ItemProps) {
  return (
    <li className="flex flex-row items-center gap-2">
      <div className="w-[22] h-[22] bg-primary-400 rounded-full outline outline-dotted outline-offset-2 m-1"/>
      {children}
    </li>
  );
}
