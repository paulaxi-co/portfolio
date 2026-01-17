import { twMerge } from "tailwind-merge";

export const BUTTON_HEIGHT = 48;

interface ItemProps {
  isSelected: boolean;
  label: string;
  onClick?: () => void;
}
export function Item({ onClick, label, isSelected }: ItemProps) {
  return (
    <button style={{height: BUTTON_HEIGHT}} className="px-4 flex-1" onClick={onClick}>
      <div className={twMerge("cursor-pointer text-primary-600 text-lg px-4", isSelected && 'font-semibold')}>
        {label}
      </div>
    </button>
  );

}
