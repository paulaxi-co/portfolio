import { Education } from "./education";
import { Skills } from "./skills";
import { Summary } from "./summary";
import { TimeLine } from "./time-line";
import { Wisf } from "./wisf";

export function AboutPage() {

  return (
    <main className="w-full max-w-[1100px] px-4 pt-4 md:pt-[32px]">
      <Summary />
      <Wisf />
      <TimeLine />
      <div className="mt-16 grid gap-16 md:mt-[100px] md:grid-cols-2 md:gap-[60px]">
        <Education />
        <div className="relative md:pt-[160px]">
          <Skills />
        </div>
      </div>
    </main>
  );
}
