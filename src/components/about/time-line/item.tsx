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
    <article className="h-full w-full rounded-2xl bg-[#ADADAD26] p-4 sm:w-[500px] sm:p-5">
      <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
        <div>
          <Subtitle>{step.title}</Subtitle>
          <h3 className="font-[400] text-[18px]">{step.subtitle}</h3>
        </div>
        <span className="w-max rounded-full bg-white px-3 py-1 text-sm">{step.timeTag}</span>
      </div>
      <ul className="list-disc pl-4 mt-4">
        {step.items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>

    </article>
  );
}


export function Item({ step }: ItemProps) {
  return (
    <div className="my-3 flex w-full max-w-[560px] flex-row sm:min-h-[260px]">
      <LateralBar />
      <Card step={step} />
    </div>
  );
}
