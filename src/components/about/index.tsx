import { Education } from "./education";
import { Skills } from "./skills";
import { Summary } from "./summary";
import { TimeLine } from "./time-line";
import { Wisf } from "./wisf";

export function AboutPage() {

  return (
    <div className="w-full px-4 max-w-[1100px] pt-[32px]">
      <Summary />
      <Wisf />
      <TimeLine />
      <div className="grid sm:grid-cols-2 gap-[60px] mt-[100px]">
        <Education />
        <div className="relative pt-[160px]">
          <Skills />
        </div>
      </div>
    </div>
  );
}
