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
      <section className="grid items-start gap-10 md:grid-cols-2 md:gap-8">
        <div>
          <Subtitle>ABOUT ME</Subtitle>
          <p>
            I’m Paula, a Product Designer who believes the best products are simple, intuitive, and human. My journey blends design with a background in business and customer experience, giving me a unique lens to spot friction and create clarity. I thrive in collaborative environments where design, business, and technology intersect.
          </p>
          <div className="mt-[48px]">
            <Subtitle>OFF-SCREEN</Subtitle>
            <div className="mt-3 grid gap-x-8 gap-y-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
              <ul className="list-none space-y-1">
                <li>🐶 Fighting with Enzo over his breakfast</li>
                <li>🍟 Team salchipapa costeña & french fries lover</li>
                <li>📚 One more chapter… always</li>
                <li>🎬 Certified couch film critic</li>
              </ul>
              <ul className="list-none space-y-1">
                <li>🐱 Proud servant of cats</li>
                <li>✨ Nerding out on the tiniest details</li>
                <li>🎶 Raised in the 2000s, vibing in the 80s</li>
                <li>☕ One Latte away from brilliance</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="relative mx-auto grid w-full max-w-[480px] grid-cols-2 items-start gap-3 pb-5 sm:gap-5">
          <div className="relative rotate-[-6deg] md:rotate-[-10deg]">
            <Picture src="/spock_and_me.png" className="w-full" />
            <SpockArrow className="absolute left-[55%] top-3 hidden md:block" />
          </div>
          <div className="relative mt-14 rotate-[7deg] md:mt-28 md:rotate-[12deg]">
            <Picture src="/enzo_and_latte.png" className="w-full" />
            <LatteArrowIcon className="absolute -top-20 left-[35%] hidden md:block" />
            <EnzoArrowIcon className="absolute left-4 top-[70%] hidden md:block" />
          </div>
        </div>
      </section>

  );
}
