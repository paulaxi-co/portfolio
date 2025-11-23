export const BUTTON_HEIGHT = 32;

interface ItemProps {
  isSelected: boolean;
  label: string;
  onClick?: () => void;
}
export function Item({ onClick, label }: ItemProps) {
  return (
    <button style={{height: BUTTON_HEIGHT}} className="px-4 flex-1" onClick={onClick}>
      <div className="cursor-pointer text-primary-600 text-lg px-4">
        {label}
      </div>
    </button>
  );

}
