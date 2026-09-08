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
    <div className="my-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-[20px]">{item.title}</h2>
      <div className="flex flex-col items-start sm:items-end">
        <h3 className="font-[700] text-primary-600 sm:text-right">{item.subtitle}</h3>
        <span className="text-[14px] sm:text-right">{item.graduationTag}</span>
      </div>
    </div>
  );
}
