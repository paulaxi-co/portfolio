import { Title } from "@/components/common/text/title";
import LinesIcon from "./lines";
import { Picture } from "./picture";
import { Experience } from "./experience";
import { Quote } from "./quote";
import { Social } from "./social";

export function Header() {
  return (
    <section className="relative w-full max-w-[860px] px-4 py-4 md:py-8">
      <div className="flex flex-col items-center">
        <div className="border rounded-full w-max px-3 py-1 relative">
          Hiya!
          <LinesIcon className="absolute top-0 right-0 translate-x-3/4 -translate-y-3/4" />
        </div>
        <Title center>I&#39;m <b className="font-[600] text-primary-600">Paula</b>,</Title>
        <Title center>Product Designer</Title>
      </div>
      <Picture />
      <div className="mt-7 grid grid-cols-2 items-start gap-6 md:contents">
        <Experience className="md:absolute md:right-0 md:top-1/2 md:mt-0"/>
        <Quote className="md:absolute md:left-0 md:top-1/2 md:mt-0"/>
        <Social className="col-span-2 mt-1 md:absolute md:bottom-0 md:right-0 md:mt-0"/>
      </div>
    </section>
  );
}
