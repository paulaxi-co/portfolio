import EnzoArrowIcon from "../common/icons/enzo-arrow";
import LatteArrowIcon from "../common/icons/latte-arrow";
import SpockArrow from "../common/icons/spock-arrow";
import { Picture } from "./picture";

function Subtitle({ children }: { children?: React.ReactNode }) {
  return (
    <h3 className="font-[900] text-[20px]">
      {children}
    </h3>
  );

}
export function Summary() {
  return (
      <div className="grid sm:grid-cols-2 gap-[16px]">
        <div>
          <Subtitle>ABOUT ME</Subtitle>
          <p>
            I’m Paula, a Product Designer who believes the best products are simple, intuitive, and human. My journey blends design with a background in logistics and customer experience, giving me a unique lens to spot friction and create clarity. I thrive in collaborative environments where design, business, and technology intersect.
          </p>
          <div className="mt-[48px]">
            <Subtitle>OFF-SCREEN</Subtitle>
            <ul className="list-disc pl-4 sm:w-[370px]">
              <li>🐶 Fighting with Enzo over his breakfast</li>
              <li>🍟 Team salchipapa costeña & french fries lover</li>
              <li>📚 One more chapter… always</li>
              <li>🎬 Certified couch film critic</li>
            </ul>
            <div className="sm:relative left-[370px] top-[-32px]">
              <ul className="list-disc pl-4">
                <li>🐱 Proud servant of cats</li>
                <li>✨ Nerding out on the tiniest details</li>
                <li>🎶 Raised in the 2000s, vibing in the 80s</li>
                <li>☕ One Latte away from brilliance</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sm:block hidden">
          <div className="relative">
            <Picture src="/spock_and_me.png" className="rotate-[-10deg]" />
            <SpockArrow className="absolute top-[15px] left-[160px]" />
          </div>
          <div className="relative">
            <Picture src="/enzo_and_latte.png" className="relative top-[-60px] left-[272px] rotate-[12deg]" />
            <LatteArrowIcon className="absolute top-[-110px] left-[350px]" />
            <EnzoArrowIcon className="absolute top-[160px] left-[290px]" />
          </div>
        </div>
      </div>

  );
}
