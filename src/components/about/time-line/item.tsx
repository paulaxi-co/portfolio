import { Subtitle } from "@/components/common/text/subtitle";

export interface TimeStep {
  id: string;
  title: string;
  subtitle: string;
  items: string[]
  timeTag: string;

}
interface ItemProps {
  step: TimeStep;

}

function LateralBar() {
  return (
    <div className="h-full hidden sm:flex flex-col items-center gap-2 px-4 py-[6px]">
      <div className="w-[24px] h-[24px] bg-primary-400 rounded-full outline-2 outline-primary-600 outline-dashed outline-offset-4" />
      <div className="flex-1 border-left border border-primary-400 w-[1px]" />
    </div>
  );
}

function Card({ step }: Pick<ItemProps, 'step'>) {
  return (
    <div className="w-full sm:w-[500px] p-4 h-full rounded-lg bg-[#ADADAD26]">
      <div className="flex flex-row justify-between">
        <div>
          <Subtitle>{step.title}</Subtitle>
          <h3 className="font-[400] text-[18px]">{step.subtitle}</h3>
        </div>
        <span>{step.timeTag}</span>
      </div>
      <ul className="list-disc pl-4 mt-4">
        {step.items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>

    </div>
  );
}


export function Item({ step }: ItemProps) {
  return (
    <div className="flex flex-row sm:h-[260px] my-4">
      <LateralBar />
      <Card step={step} />
    </div>
  );
}
