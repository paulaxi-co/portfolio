export interface EducationItem {
  id: string;
  title: string;
  subtitle: string;
  graduationTag: string;
}
interface EducationItemProps {
  item: EducationItem;
}
export function EducationItem({ item }: EducationItemProps) {
  return (
    <div className="flex flex-row justify-between items-center my-3">
      <h2 className="text-[20px]">{item.title}</h2>
      <div className="flex flex-col items-end">
        <h3 className="font-[700] text-primary-600 text-right">{item.subtitle}</h3>
        <span className="text-[14px] text-right">{item.graduationTag}</span>
      </div>
    </div>
  );
}
