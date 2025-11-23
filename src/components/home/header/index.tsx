import { Title } from "@/components/common/text/title";
import LinesIcon from "./lines";
import { Picture } from "./picture";
import { Experience } from "./experience";
import { Quote } from "./quote";
import { Social } from "./social";

export function Header() {
  return (
    <div className="py-8 w-full max-w-[800] relative">
      <div className="flex flex-col items-center">
        <div className="border rounded-full w-max px-3 py-1 relative">
          Hiya!
          <LinesIcon className="absolute top-0 right-0 translate-x-3/4 -translate-y-3/4" />
        </div>
        <Title center>I&#39;m <b className="font-[600] text-primary-600">Paula</b>,</Title>
        <Title center>Product Designer</Title>
      </div>
      <Picture />
      <Experience className="sm:absolute mt-8 sm:mt-0 right-0 top-1/2"/>
      <Quote className="sm:absolute left-0 top-1/2 mt-4 sm:mt-0"/>
      <Social className="sm:absolute bottom-0 right-0 mt-4 sm:mt-0"/>
    </div>
  );
}
